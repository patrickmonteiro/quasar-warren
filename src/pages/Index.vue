<template>
  <q-page padding>
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
    <list-section />
    <list-product />
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  components: {
    Overview: () => import('components/Overview'),
    LineOverview: () => import('components/charts/LineOverview'),
    ListSection: () => import('components/lists/ListSection'),
    ListProduct: () => import('components/lists/ListProduct')
  }
}
</script>
