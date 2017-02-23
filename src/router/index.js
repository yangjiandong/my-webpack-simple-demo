import Vue from 'vue';
import Router from 'vue-router';
// import Hello from 'components/Hello';
import index from 'views/Index';
import login from 'views/Login';

Vue.use(Router);

const demo1 = r => require(['views/Demo1'], r);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/index',
      component: index
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/demo1',
      component: demo1
    }
  ]
});
