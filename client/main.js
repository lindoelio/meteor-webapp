import { Meteor } from 'meteor/meteor'

// Using "isMobile" in development mode. For production, use isCordova
if (Meteor.isMobile) {
  import '/imports/startup/client/mobile/index.js'
}
else {
  import '/imports/startup/client/web/index.js'
}
