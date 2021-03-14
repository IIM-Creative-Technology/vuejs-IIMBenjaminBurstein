import { createApp } from 'vue'
import App from './App.vue'
import Head from './Head.vue'
import router from './router'
import store from './store'
import VueMeta from 'vue-meta'


createApp(App).use(store).use(router).mount('#app')
createApp(Head).use(store).use(router).use(VueMeta).mount('#head')
