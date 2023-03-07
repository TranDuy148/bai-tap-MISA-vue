import { createApp } from 'vue'
import App from './App.vue'
import DInput from './components/base/DInput.vue'

const app = createApp(App);
app.component("DInput", DInput)
createApp(App).mount('#app')
