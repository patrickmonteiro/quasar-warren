<template>
  <q-card class="bg-transparent no-shadow">
    <q-card-section>
      <p class="montserrat text-h5 text-weight-bolder text-info">
        Trade
      </p>

      <div class="q-pt-sm">
        <q-img
          class="img-trade"
          src="https://warren.com.br/assets/imgs/account_states/trade/deposit/web_small.jpg"
        >
          <div class="absolute-bottom img-trade-background">
            <div class="text-body1 text-weight-bold">FAÇA SEU PRIMEIRO DEPÓSITO EM TRADE</div>
            <div class="text-body2 q-pt-sm ">Transfira ou deposite para comprar seus primeiros ativos.</div>
          </div>
        </q-img>
      </div>

    </q-card-section>
  </q-card>
</template>

<script scoped>
export default {
  name: 'TradeOverview'
}
</script>

<style>
.img-trade {
  border-radius: 14px;
  height: 65vh;
}
.img-trade-background {
  height: 160px;
  background: rgba(46,45,51,.3);
  -webkit-backdrop-filter: blur(60px);
  backdrop-filter: blur(60px);
}
</style>
