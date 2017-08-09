import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import { Stlfiles } from '../imports/api/stlfiles.js';

Template.list.onCreated(function helloOnCreated() {
  this.filter = new ReactiveVar('name');
  this.autorun(()=>{
    this.subscribe('stlfiles')
  })
});

Template.list.helpers({
  files() {
    const filter = Template.instance().filter.get()
    if (filter == 'name') {
      return Stlfiles.find({}).fetch().sort((a,b)=>{
        return a.name>b.name
      })
    }
    return Stlfiles.find({}, {sort: [[filter,'asc']]})
  }
})

Template.list.events({
  'change select'(event, instance) {
    const filter = document.getElementById('filterselect').value
    instance.filter.set(filter);
  },
});

window.uploadToFileStack = ()=>{
  const client = window.filestack.init('AdTs2mYYCT06g6qLtsY6Nz');
  client.pick({
  }).then((result) => {
    const url = result.filesUploaded[0].url
    var loader=new THREE.STLLoader();
    loader.addEventListener('load', function (event){
        var geometry=event.content;
        const name = document.getElementById("stlfilename").value
        Stlfiles.insert({createdAt: new Date(), url: url, name: name, vertices: geometry.vertices.length, faces: geometry.faces.length})
    })
    loader.load(url)
  });
}
//
// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });
//
// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });
