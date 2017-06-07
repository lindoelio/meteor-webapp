import { Meteor } from 'meteor/meteor'

if (Meteor.isMobile) {
  console.log("Mobile...")
  import '/imports/startup/client/mobile/index.js'
}
else {
  console.log("Web...")
  import '/imports/startup/client/web/index.js'
}
