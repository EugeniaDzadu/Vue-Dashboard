import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Index from './pages/index.vue'
import Button from './pages/button.vue'
import Chart from './pages/chart.vue'
import Elements from './pages/element.vue'
import SignUp from './pages/sign-up.vue'
import SignIn from './pages/sign-in.vue'
import Forms from './pages/forms.vue'
import Table from './pages/table.vue'
import Widget from './pages/widget.vue'


const routes = [
    {path: '/', component: Index},
    {path: '/button', component: Button},
    {path: '/chart', component: Chart},
    {path: '/element', component: Elements},
    {path: '/sign-up', component: SignUp},
    {path: '/sign-in', component: SignIn},
    {path: '/forms', component: Forms},
    {path: '/table', component: Table},
    {path: '/widget', component: Widget},



]

const router = createRouter({
    history: createWebHistory(),
    routes
  })

  const app = createApp(App)
  app.use(router)
  app.mount('#app')



