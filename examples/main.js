import Vue from 'vue'
import App from './App.vue'

import MbdogeEditor from '../src/mbdoge-editor'

Vue.config.productionTip = false

Vue.component(MbdogeEditor.name, MbdogeEditor)

new Vue({
    render: h => h(App)
}).$mount('#app')
