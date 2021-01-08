<template>
  <div id="chart">
    <apexchart type="line" height="150" :options="chartOptions" :series="series" />
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
  name: 'LineOverviewChart',
  data () {
    return {
      period: ['30D', '3M', '6M', '12M', 'TUDO'],
      series: [
        {
          data: [10, -10, 10, 10, 10, 62, 69, 75, 80, 75]
        }
      ],
      chartOptions: {
        colors: [colors.getBrand('primary'), '#17ead9', '#f02fc2'],
        chart: {
          toolbar: {
            show: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight',
          width: 3
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
        }
      }
    }
  }
}
</script>
