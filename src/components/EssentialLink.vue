<template>
  <q-item
    class="text-dark q-py-md"
    clickable
    :to="route"
  >
    <!-- <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section> -->

    <q-item-section>
      <q-item-label
        class="text-body2"
        :class="bold ? 'text-weight-bolder text-uppercase menu-text' : 'text-body2 menu-text'"
      >
        {{ title }}
      </q-item-label>
    </q-item-section>
    <q-item-section side v-if="icon">
      <q-icon :name="icon" color="grey-5" size="0.8rem" />
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    route: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    },

    bold: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
.menu-text {
 font-size: 18px !important;
}
</style>
