import { Meteor } from 'meteor/meteor';
import '../imports/api/stlfiles.js';

Meteor.startup(() => {
  // code to run on server at startup
});

function mainTest () {
  return 'mainTest'
}

export default mainTest
