import { chai } from 'meteor/practicalmeteor:chai';
import mainTest from './example'

describe('my module', function () {
  it('does something that should be tested', function () {
    // This code will be executed by the test driver when the app is started
    // in the correct mode
    chai.assert.equal(mainTest(), 'mainTest')
  })
})
