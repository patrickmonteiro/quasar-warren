<template>
  <q-page padding>
    <div class="row">
      <div class="col-md-8 col-sm-12 col-xs-12">
        <account-overview />
        <line-account-overview :colorBars="'positive'" />
        <div class="row">
          <div class="col-12 q-pt-xl">
            <q-btn
              color="positive"
              label="Fazer Transação"
              class="text-bold"
              rounded
              unelevated
            />
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-12 col-xs-12">
        <scroll-page>
          <list-account-latest-moves />
          <list-account-section />
          <list-help-options :items="items"> </list-help-options>
        </scroll-page>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  components: {
    AccountOverview: () => import('components/AccountOverview'),
    LineAccountOverview: () => import('components/charts/LineAccountOverview'),
    ListAccountSection: () => import('components/lists/ListAccountSection'),
    ListAccountLatestMoves: () => import('components/lists/ListAccountLatestMoves'),
    ListHelpOptions: () => import('components/lists/ListHelpOptions'),
    ScrollPage: () => import('components/scroll/ScrollPage')
  },
  data () {
    return {
      items: [
        {
          color: 'positive',
          icon: 'mdi-help',
          title: 'Dúvidas',
          route: '/test'
        }
      ]
    }
  }
}
</script>
