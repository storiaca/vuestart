// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import Users from './components/Users'
import Hello from './components/Hello'


Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {path:'/', component: Users},
        {path:'/hello', component: Hello}
    ]
});
/* eslint-disable no-new */
new Vue({
  router,
  template: `
    <div id="app">
        <ul>
            <li><router-link to="/">Users</router-link></li>
            <li><router-link to="/hello">Hello</router-link></li>
        </ul>
        <router-view></router-view>
    </div>
  `,
}).$mount('#app')
