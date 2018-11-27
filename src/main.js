import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/scss/main.scss'
import './registerServiceWorker'

// Vue Material
import { MdButton, MdContent, MdTabs , MdApp, MdIcon} from 'vue-material/dist/components'
Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)
Vue.use(MdApp)
Vue.use(MdIcon)
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
Vue.use(VueMaterial)
// 

// Vue Bootstrap
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
// 

//  Vue DragDrop
import VueDragDrop from 'vue-drag-drop'
Vue.use(VueDragDrop)
// 



//  Vue DragDrop
import VueDND from 'awe-dnd'
Vue.use(VueDND)
//

import VueSplit from 'vue-split-panel';
Vue.use(VueSplit)

import VueSweetalert2 from 'vue-sweetalert2';
Vue.use(VueSweetalert2)

// Vue Fontaswame
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faUserSecret, faFont,faHome } from '@fortawesome/free-solid-svg-icons'
  import { faFacebook } from '@fortawesome/free-brands-svg-icons'
  // import { faUserSecret } from  '@fortawesome/free-regular-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  library.add(faUserSecret , faFont, faFacebook,faHome)
  Vue.component('font-awesome-icon', FontAwesomeIcon)
  import { dom } from '@fortawesome/fontawesome-svg-core'
  dom.watch()
// 

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
