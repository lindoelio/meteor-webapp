// Import the router and default page for Home mobile resource
import { RouterFactory, nativeScrollBehavior } from 'meteor/akryum:vue-router2'
import HomeMobile from '/imports/ui/mobile/components/Home.vue'

// Create router instance
export const routerFactory = new RouterFactory({
  mode: 'history',
  scrollBehavior: nativeScrollBehavior
})

RouterFactory.configure(router => {
  router.addRoute({
    path: '*',
    component: HomeMobile,
  })
}, -1)
