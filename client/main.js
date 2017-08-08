import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import { Stlfiles } from '../imports/api/stlfiles.js';

Template.list.onCreated(function helloOnCreated() {
  this.autorun(()=>{
    this.subscribe('stlfiles')
  })
});

Template.list.helpers({
  files() {
    return Stlfiles.find({})//[{url:'1'}, {url:'2'}, {url:'3'}]
  }
})

window.uploadToFileStack = ()=>{
  const client = window.filestack.init('AdTs2mYYCT06g6qLtsY6Nz');
  client.pick({
  }).then((result) => {
    const url = result.filesUploaded[0].url
    console.log('new file: ', url)
    Stlfiles.insert({url: url})
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
