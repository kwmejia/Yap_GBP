import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import router from './router/router';
import ECharts from 'vue-echarts'
import { use } from "echarts/core"
import 'element-plus/dist/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart } from 'echarts/charts'
import { GridComponent, TooltipComponent } from 'echarts/components'

use([
  CanvasRenderer,
  BarChart,
  GridComponent,
  TooltipComponent
])

const app = createApp(App)

app.use(ElementPlus)
  .use(router)
  .component('v-chart', ECharts)
  .mount('#app')