<template>
  <div class="row justify-center" style="height: 100vh">
    <div class="col-xs-12 col-sm-6 flex container-logo">
      <div class="column self-center q-mx-auto">
        <img
          class="q-mx-auto"
          src="../assets/app-logo.png"
          :width="$q.screen.gt.sm ? 'auto' : '50'"
        />
        <div
          :class="
            $q.screen.gt.sm
              ? 'text-center text-h2 text-weight-bolder text-white'
              : 'text-center text-h5 text-weight-bolder text-white'
          "
        >
          quasar warren
        </div>
      </div>
    </div>
    <div class="column q-gutter-y-lg q-pa-md self-center q-mx-auto">
      <div
        :class="
          $q.screen.gt.sm
            ? 'text-h5 text-weight-bold'
            : 'text-h6 text-weight-bold'
        "
      >
        Acessar minha conta
      </div>
      <label>E-mail</label>
      <q-input filled bottom-slots v-model="text">
        <template v-slot:prepend>
          <q-icon name="email" />
        </template>
      </q-input>
      <!-- <q-btn
       class="btn-login"
        rounded
        color="positive"
        size="xl"
        label="Continuar"
      /> -->
      <q-btn
        class="btn-login"
        rounded
        color="positive"
        size="xl"
        label="Continuar"
        :loading="loading1"
        @click="simulateProgress(1)"
      >
        <template v-slot:loading>
          <q-spinner-gears />
        </template>
      </q-btn>
      <div class="divider q-mt-lg q-mb-sm"></div>
      <div class="row justify-center">
        <div class="col-12">
          <div class="row justify-center q-gutter-lg">
            <div class="col-5">
              <q-btn
                class="float-right"
                size="18.7px"
                round
                color="blue-10"
                icon="facebook"
              />
            </div>
            <div class="col-5">
              <q-btn size="18.7px" round color="black" icon="home" />
            </div>
            <div class="col-12 q-mt-xl">
              <div
                class="text-weight-bold text-uppercase text-center cursor-pointer"
              >
                Ainda não sou cliente
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loading1: false,
      text: ''
    }
  },
  methods: {
    simulateProgress (number) {
      // we set loading state
      this[`loading${number}`] = true
      // simulate a delay
      setTimeout(() => {
        // we're done, we reset loading state
        this[`loading${number}`] = false
      }, 3000)
    }
  }
}
</script>
<style>
.container-logo {
  background-color: #ee2e5d;
}
@media screen and (min-width: 320px) and (max-width: 737px) {
  .container-logo {
    height: 183px !important;
    width: 100% !important;
  }
}
.btn-login span.block {
  font-size: 16px !important ;
  font-weight: bold;
}
.divider {
  border-top: 1px solid #ebecf3;
}
</style>
