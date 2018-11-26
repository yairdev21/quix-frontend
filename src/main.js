import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import { MdButton, MdContent, MdTabs , MdApp} from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'

Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)
Vue.use(MdApp)
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueDragDrop from 'vue-drag-drop'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import VueSplit from 'vue-split-panel';
import VueSweetalert2 from 'vue-sweetalert2';

Vue.use(BootstrapVue)
Vue.use(VueDragDrop)
Vue.use(VueMaterial)
Vue.use(VueSplit)
Vue.use(VueSweetalert2)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
