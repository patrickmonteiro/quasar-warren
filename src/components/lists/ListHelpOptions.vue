<template>
  <div class="q-pt-lg q-pb-lg">
    <q-list separator class="rounded-borders">
      <q-item
        v-for="(item, index) in items"
        :key="index"
        clickable
        v-ripple
        class="bg-white rounded-borders q-py-md"
      >
        <q-item-section avatar>
          <q-avatar :color="item.color" text-color="white" :icon="item.icon" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-body1"> {{ item.title }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <div class="text-dark text-body1">
            <q-icon name="fas fa-chevron-right" color="grey-5" />
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      required: true
    }
  }
}
</script>
