<template>
  <div class="q-pt-lg q-pb-sm">
    <q-list separator class="rounded-borders q-pb-sm">
      <q-item clickable v-ripple class="bg-white rounded-borders q-py-md">
        <q-item-section avatar>
          <warren-icon />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-body1"> 371 - Warren Brasil</q-item-label>
          <q-item-label caption>Banco</q-item-label>
        </q-item-section>
      </q-item>
      <q-item
        v-for="(section, index) in sections"
        :key="index"
        clickable
        v-ripple
        class="bg-white rounded-borders q-py-md"
      >
        <q-item-section>
          <q-item-label class="text-body1"> {{ section.title }}</q-item-label>
          <q-item-label caption>{{ section.amount }}</q-item-label>
        </q-item-section>
        <q-item-section item-section side v-if="section.copy">
          <div class="text-dark text-body1">
            <q-icon
              class="float-right"
              name="mdi-content-copy"
              color="grey-7"
              size="xs"
            />
          </div>
        </q-item-section>
      </q-item>
      <q-item
        clickable
        v-ripple
        class="bg-white rounded-borders q-py-md no-border"
      >
        <q-item-section>
          <q-item-label class="text-grey">
            * Só é possivel receber transferências de uma conta da mesma
            titularidade</q-item-label
          >
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  name: 'ListSection',
  components: {
    WarrenIcon: () => import('components/WarrenIcon')
  },
  data () {
    return {
      active: true,
      sections: [
        {
          title: '0001',
          value: 100,
          amount: 'Agência',
          percent: 100,
          copy: true
        },
        {
          title: '125648-8',
          value: 10,
          amount: 'Conta e Dígito',
          copy: true
        },
        {
          title: 'Conta Corrente',
          value: 25,
          amount: 'Tipo de Conta',
          copy: false
        }
      ]
    }
  }
}
</script>
