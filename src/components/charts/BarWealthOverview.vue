<template>
  <div id="chart">
    <apexchart
      type="bar"
      :height="$q.screen.lt.sm ? '150' : '350'"
      :options="chartOptions"
      :series="series"
    />
    <q-btn
      v-for="(btn, index) in period"
      :key="index"
      dense
      flat
      class="q-px-sm text-grey-7"
      :class="btn === '30D' ? 'bg-grey-4 text-grey-10 text-weight-bolder' : ''"
    >
      {{ btn }}
    </q-btn>
  </div>
</template>

<script>
import { colors } from 'quasar'
export default {
  name: 'BarWealthOverviewChart',
  props: {
    colorBars: {
      type: String,
      default: 'warning',
      required: false
    }
  },
  data () {
    return {
      period: ['30D', '3M', '6M', '12M', 'TUDO'],
      series: [{
        name: 'Inflation',
        data: [10, 40, 15, 10, 13, 90, 30, 20, 30, 15, 14, 50]
      }],
      chartOptions: {
        colors: [colors.getBrand(this.colorBars), '#17ead9', '#f02fc2'],
        chart: {
          toolbar: {
            show: false
          }
        },
        dataLabels: {
          enabled: false
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '35%'
          }
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        // title: {
        //   text: 'Product Trends by Month',
        //   align: 'left'
        // },
        grid: {
          show: false
        },
        xaxis: {
          axisBorder: {
            show: true
          },
          axisTicks: {
            show: true,
            borderType: 'solid'
          },
          labels: {
            show: false
          }
        },
        yaxis: {
          labels: {
            show: false
          }
        },
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 800,
          animateGradually: {
            enabled: true,
            delay: 150
          },
          dynamicAnimation: {
            enabled: true,
            speed: 350
          }
        }
      }
    }
  }
}
</script>
