<template>
  <q-page padding>
    <div class="row">
      <div class="col-md-8 col-sm-12 col-xs-12 q-pa-md">
        <q-skeleton
          :height="$q.screen.lt.sm ? '180px' : '300px'"
          :animation="animation"
        />
        <!-- <overview />
        <line-overview /> -->

        <div class="row">
          <div class="col-12 q-pt-xl">
            <q-skeleton
              type="QBtn"
              width="150px"
              class="rounded-borded"
              :animation="animation"
            />
            <!-- <q-btn
              color="primary"
              label="Fazer Transação"
              class="text-bold"
              rounded
              unelevated
            /> -->
          </div>
        </div>
      </div>

      <div class="col-md-4 col-sm-12 col-xs-12">
        <q-item
          v-for="item in itemsList"
          :key="item"
          style="max-width: 300px">
          <q-item-section avatar>
            <q-skeleton
              type="QAvatar"
              :animation="animation"
            />
          </q-item-section>

          <q-item-section>
            <q-item-label>
              <q-skeleton type="text" :animation="animation" />
            </q-item-label>
            <q-item-label caption>
              <q-skeleton type="text" width="65%" :animation="animation" />
            </q-item-label>
          </q-item-section>
        </q-item>
        <!-- <list-section />
        <list-product />
        <list-latest-moves />
        <list-help-options :items="items"> </list-help-options> -->
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageSkeleton',
  data () {
    return {
      animation: 'wave'
    }
  },
  computed: {
    itemsList () {
      return this.$q.screen.lt.sm ? 4 : 8
    }
  }
}
</script>
