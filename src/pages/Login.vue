<template>
  <div class="row justify-center" style="height: 100vh">
    <transition name="fade">
      <div class="col-xs-12 col-sm-6 flex container-logo" v-if="fade">
        <q-icon
          v-if="login"
          name="mdi-arrow-left"
          class="q-ma-lg absolute-full cursor-pointer"
          size="21px"
          color="white"
          @click="login = !login"
        />
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
    </transition>
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
      <label v-if="!login">E-mail</label>
      <q-input required v-if="!login" filled bottom-slots v-model="email">
        <template v-slot:prepend>
          <q-icon name="email" />
        </template>
      </q-input>
      <label v-if="login">Senha para {{ email }}</label>
      <q-input v-if="login" filled bottom-slots v-model="password">
        <template v-slot:prepend>
          <q-icon name="lock" />
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
        id="btn-login"
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
      <div class="row">
        <div class="col-12">
          <div class="row justify-center q-gutter-lg">
            <div class="col-5">
              <q-btn
                v-show="!login"
                class="float-right "
                size="18.7px"
                round
                color="blue-10"
                icon="fab fa-facebook-f"
              />
            </div>
            <div class="col-5">
              <q-btn
                v-show="!login"
                class=""
                size="18.7px"
                round
                color="black"
                icon="fab fa-apple"
              />
            </div>
            <div class="col-12 q-mt-xl">
              <div
                v-if="!login"
                class="text-weight-bold text-uppercase text-center cursor-pointer"
              >
                Ainda não sou cliente
              </div>
              <div
                v-else
                class="text-weight-bold text-uppercase text-center cursor-pointer"
              >
                Esqueci minha senha
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
      email: '',
      password: '',
      login: false,
      fade: true
    }
  },
  methods: {
    simulateProgress (number) {
      this.fade = false
      this[`loading${number}`] = true
      setTimeout(() => {
        this[`loading${number}`] = false
        if (this.login === true) {
          this.$router.push({ name: 'dashboard' })
        }
        this.login = true
        this.fade = true
      }, 1000)
    }
  }
}
</script>
<style>
/* div.container-logo {
  background-color: #ee2e5d;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0.2;
}
@media screen and (min-width: 320px) and (max-width: 737px) {
  div.container-logo {
    height: 183px !important;
    width: 100% !important;
  }
}
#btn-login {
  font-size: 16px !important ;
  font-weight: bold;
  height: 70px;
}
.divider {
  border-top: 1px solid #ebecf3;
} */
</style>
