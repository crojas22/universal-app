import List from './components/List'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Item from './components/Item'

export default {
  routes: [
    {
      path: '/',
      component: Home,
      exact: true
    },
    {
      path: '/list',
      component: List,
      exact: true
    },
    {
      path: '/list/:item',
      component: Item
    },
    {
      path: '*',
      component: NotFound
    }
  ]
}
