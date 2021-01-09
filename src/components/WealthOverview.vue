<template>
  <q-card class="bg-transparent no-shadow">
    <q-card-section>
      <p class="montserrat text-h5 text-weight-bolder text-warning">
        Carteiras

        <q-icon class="float-right" name="fas fa-eye" color="dark" />
      </p>
      <p class="text-h4 text-weight-bolder q-ma-none">
        R$ 17.852,63
      </p>
      <div>
        <span class="text-h5 text-weight-normal">
          R$ 962,91
        </span>
        <q-icon
          class="float-right"
          name="fas fa-chevron-right"
          color="grey-5"
          size="xs"
        />
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'WealthOverview'
}
</script>
