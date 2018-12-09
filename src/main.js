import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VeeValidate from 'vee-validate';
import store from './store'
import '@/assets/scss/main.scss'
import './registerServiceWorker'
var SocialSharing = require('vue-social-sharing');

Vue.use(SocialSharing);
Vue.use(VeeValidate)

// vue-drag-drop
import VueDragDrop from 'vue-drag-drop';
Vue.use(VueDragDrop);
// 

// Vue Bootstrap
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
// 
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
    load: {
        key: "AIzaSyDZzqik5JAq6HK7gloZt8_BvLvh04DFjYs",
        libraries: "places" 
    }
});

// import VueSplit from 'vue-split-panel';
// Vue.use(VueSplit)

import VueSweetalert2 from 'vue-sweetalert2';
Vue.use(VueSweetalert2)


import VueAWN from "vue-awesome-notifications"
 
Vue.use(VueAWN, {
    labels: {
        warning: 'Something went wrong',
        success: 'Welcome'
    },
    duration: 2500
});

// Vue Fontaswame
import {
    library
} from '@fortawesome/fontawesome-svg-core'
import {
    faFileImage,
    faFont,
    faArrowsAlt,
    faHome,
    faPlus,
    faMinus,
    faBold,
    faItalic,
    faLink,
    faPalette,
    faGlobe,
    faWindowClose,
    faShareAlt
} from '@fortawesome/free-solid-svg-icons'
import {
    faFacebook,
    faYoutube,
    faInstagram
} from '@fortawesome/free-brands-svg-icons'
import {
    FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'
library.add(faFileImage, faWindowClose, faFont, faArrowsAlt, faFacebook, faHome, faPlus, faMinus, faBold, faItalic, faLink, faPalette, faFacebook, faYoutube, faInstagram, faGlobe, faShareAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon)
import {
    dom
} from '@fortawesome/fontawesome-svg-core'
dom.watch()
// 

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')