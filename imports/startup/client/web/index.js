import { Meteor } from 'meteor/meteor'
import Vue from 'vue'

import '/node_modules/bulma/css/bulma.css'

import '/imports/ui/commons/stylesheets/font-awesome.css'

import { routerFactory } from '/imports/startup/client/web/routes.js'
import FrontLayout from '/imports/ui/web/layouts/FrontLayout.vue'

// App start
Meteor.startup(() => {
  const router = routerFactory.create()
  new Vue({ router, render: h => h(FrontLayout) }).$mount('app')
})
