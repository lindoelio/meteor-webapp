// Import the router and default page for NotFound resource
import { RouterFactory, nativeScrollBehavior } from 'meteor/akryum:vue-router2'
import NotFound from '/imports/ui/web/pages/NotFound.vue'

// Create router instance
export const routerFactory = new RouterFactory({
  mode: 'history',
  scrollBehavior: nativeScrollBehavior
})

RouterFactory.configure(router => {
  router.addRoute({
    path: '*',
    component: NotFound,
  })
}, -1)
