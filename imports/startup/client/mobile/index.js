import { Meteor } from 'meteor/meteor'
import Vue from 'vue'

import 'onsenui'

import VueOnsen from 'vue-onsenui'

Vue.use(VueOnsen)

import '/imports/ui/mobile/stylesheets/onsenui.css'
import '/imports/ui/mobile/stylesheets/onsen-css-components.css'

import '/imports/ui/commons/stylesheets/font-awesome.css'
import '/imports/ui/commons/stylesheets/ionicons.css'
import '/imports/ui/commons/stylesheets/material-design-iconic-font.css'

import { routerFactory } from './routes.js'
import AppLayout from '/imports/ui/mobile/components/AppLayout.vue'

// App start
Meteor.startup(() => {
  const router = routerFactory.create()
  new Vue({ router, render: h => h(AppLayout) }).$mount('app')
})
