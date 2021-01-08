<template>
  <q-page padding>
    <div class="row">
      <div class="col-md-8 col-sm-12 col-xs-12">
        <overview />
        <line-overview />

        <div class="row">
          <div class="col-12 q-pt-xl">
            <q-btn
              color="primary"
              label="Fazer Transação"
              class="text-bold"
              rounded
              unelevated
            />
          </div>
        </div>
      </div>

      <div class="col-md-4 col-sm-12 col-xs-12">
        <list-section />
        <list-product />
        <list-latest-moves />
        <list-help-options :items="items"> </list-help-options>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  components: {
    Overview: () => import('components/Overview'),
    LineOverview: () => import('components/charts/LineOverview'),
    ListSection: () => import('components/lists/ListSection'),
    ListProduct: () => import('components/lists/ListProduct'),
    ListLatestMoves: () => import('components/lists/ListLatestMoves'),
    ListHelpOptions: () => import('components/lists/ListHelpOptions')
  },
  data () {
    return {
      items: [
        {
          color: 'primary',
          icon: 'mdi-clock-outline',
          title: 'Históricos de rendimentos',
          route: '/history'
        },
        {
          color: 'primary',
          icon: 'mdi-help',
          title: 'Dúvidas',
          route: '/test'
        }
      ]
    }
  }
}
</script>
