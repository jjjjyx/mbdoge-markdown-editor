import Vue from 'vue'
import App from './App.vue'

import '@fortawesome/fontawesome-free/js/all'
import MbdogeEditor from '../src/index'
import '../src/assets/scss/index.scss'
import './main.scss'

Vue.config.productionTip = false
Vue.use(MbdogeEditor, {
    autoDownloadFontAwesome: false
})
// Vue.component(MbdogeEditor.name, MbdogeEditor)

new Vue({
    render: h => h(App)
}).$mount('#app')
