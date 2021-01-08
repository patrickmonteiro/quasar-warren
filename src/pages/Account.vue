<template>
  <q-page padding>
    <div class="row">
      <div class="col-md-8 col-sm-12 col-xs-12">
        <account-overview />
        <line-account-overview />
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
        <list-account-latest-moves />
        <list-account-section />
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
    ListAccountLatestMoves: () =>
      import('components/lists/ListAccountLatestMoves')
  }
}
</script>
