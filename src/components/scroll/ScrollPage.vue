<template>
  <q-scroll-area
    style="height: 90vh; overflow: hidden !important"
    :visible="false"
  >
    <slot></slot>
  </q-scroll-area>
</template>

<script>
export default {
  name: 'ScrollPage'
}
</script>
