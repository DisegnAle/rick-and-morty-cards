import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/main'
import CharacterDetail from './components/characterDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'characters-list',
      component: Main
    },
    {
      path: '/character-detail/:id',
      name: 'character-detail',
      component: CharacterDetail
    },
    {
      path: '*', redirect: '/'
    }

  ],
  mode: 'history'
})
