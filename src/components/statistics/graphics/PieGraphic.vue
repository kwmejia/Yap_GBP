<template>
  <v-chart class="chart" :option="option" />
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
]);

export default {
  name: "PieGraphic",
  components: {
    VChart
  },
  provide: {
    [THEME_KEY]: "ligth"
  },
  data() {
    return {
      option: {
        title: {
          text: 'Ventas por género',
          left: 'center',
          margin: 20,
        },

        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center',
          show: false
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 14,
                fontWeight: 'bold'

              }
            },
            labelLine: {
              show: false
            },

            data: [
              { value: 1500, name: 'Hombres' },
              { value: 935, name: 'Mujeres' },
              { value: 990, name: 'Otro' },
            ]
          }
        ]
      }
    };
  }
};
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>