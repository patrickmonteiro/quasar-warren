<template>
  <q-card class="bg-transparent no-shadow" >
      <q-card-section>
        <p class="montserrat text-h5 text-weight-bolder text-primary">
          Visão Geral

          <q-icon
            class="float-right"
            name="fas fa-eye"
            color="dark"
          />
        </p>
        <p class="text-h4 text-weight-bolder q-ma-none">
          R$ 4.122,63
        </p>
        <div>
          <span class="text-h5 text-weight-normal">
            R$ 124,91
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
