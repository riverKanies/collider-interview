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
    if (Template.instance().filter.get() == 'vertices') {
      return Stlfiles.find({}, {sort: [['vertices','asc']]})
    } else {
      return Stlfiles.find({})
    }
  }
})

Template.list.events({
  'click button'(event, instance) {
    instance.filter.set('vertices');
    console.log('filtering')
  },
});

window.uploadToFileStack = ()=>{
  const client = window.filestack.init('AdTs2mYYCT06g6qLtsY6Nz');
  client.pick({
  }).then((result) => {
    const url = result.filesUploaded[0].url
    console.log('new file: ', url)
    var loader=new THREE.STLLoader();
    loader.addEventListener('load', function (event){
        var geometry=event.content;
        const name = document.getElementById("stlfilename").value
        console.log('verticies: ', geometry.vertices.length, geometry.faces.length)
        Stlfiles.insert({url: url, name: name, vertices: geometry.vertices.length, faces: geometry.faces.length})
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
