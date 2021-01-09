<template>
  <div class="q-pt-lg">
    <span class="text-h6 text-bold">Minhas Carteiras</span>
    <q-img
      class="img-wealth"
      src="https://images.unsplash.com/photo-1518281832232-13104d6c3b6c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjg5Nzd9&s=af33a82311d364b6ace9804c6a8856fa"
    >
      <div class="absolute-top img-wealth-background">
        <div class="img-wealth-border"></div>
        <div class="text-h5 text-weight-bold">7k Avançado</div>
        <div class="text-h5 q-pt-sm ">R$ 7.654,85</div>
      </div>
    </q-img>
    <list-help-options :items="items"> </list-help-options>
  </div>
</template>
<script>
export default {
  components: {
    ListHelpOptions: () => import('components/lists/ListHelpOptions')
  },
  data () {
    return {
      items: [
        {
          color: 'warning',
          icon: 'mdi-plus',
          title: 'Criar nova carteira',
          route: '/test'
        }
      ]
    }
  }
}
</script>
<style scoped>
.img-wealth {
  border-radius: 14px;
  height: 160px;
}
.img-wealth-border {
  width: 100%;
  height: 4px;
  background-color: #05f277;
  margin-bottom: 20px;
}
.img-wealth-background {
  height: 160px;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.15) 70%
  );
}
</style>
