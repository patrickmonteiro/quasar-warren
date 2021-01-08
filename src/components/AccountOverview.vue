<template>
  <q-card class="bg-transparent no-shadow">
    <q-card-section>
      <p class="montserrat text-h5 text-weight-bold text-positive">
        Conta

        <q-icon class="float-right" name="fas fa-eye" color="dark" />
      </p>
      <p class="text-h4 text-weight-bold q-ma-none">
        R$ 4.122,63
      </p>
      <div>
        <span class="text-h6 text-weight-normal">
          R$ 124,91 <span class="text-grey">(100% do CDI) </span>
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
  name: 'Overview'
}
</script>
