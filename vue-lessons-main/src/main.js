import Vue from 'vue'
import App from './App.vue'
import mixinFilters from '@/mixins/filters.js'
import Todo from '@/components/Todo.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/style/app.scss'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.mixin(mixinFilters)
Vue.component('Todo', Todo)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
