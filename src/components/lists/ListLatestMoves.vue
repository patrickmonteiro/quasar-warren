<template>
  <div class="q-pt-lg q-pb-sm">
    <span class="text-h6 text-bold q-pl-sm">Últimas movimentações</span>
    <q-list separator class="rounded-borders">
      <q-item
        v-for="(section, index) in sections"
        :key="index"
        clickable
        v-ripple
        class="bg-white rounded-borders q-py-md"
      >
        <q-item-section>
          <q-item-label class="text-h6 text-weight-regular"> {{ section.title }}</q-item-label>
          <q-item-label caption>{{ section.date }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-item-label class="text-body1 text-dark"> R$ {{ section.amount }}</q-item-label>
          <q-item-label caption>
            <q-badge color="positive" class="text-caption q-py-none" style="border-radius: 11px">
              Concluído
            </q-badge>
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        class="bg-white rounded-borders q-py-md"
      >
        <q-item-section>
          <q-item-label class="text-body1 text-weight-bold text-uppercase">
              Ver Todas
          </q-item-label>
        </q-item-section>
        <q-item-section side>
           <q-icon
              name="fas fa-chevron-right"
              color="grey-5"
              size="xs"
            />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  name: 'ListLatestMoves',
  data () {
    return {
      active: true,
      sections: [
        {
          title: 'Movimentação Interna',
          value: 80,
          date: '21/12/2020',
          amount: '1.000,00',
          percent2: '3,02'
        },
        {
          title: 'Outros',
          value: 10,
          date: '21/12/2020',
          amount: '1.000,00',
          percent2: '0,82'
        },
        {
          title: 'Renda Fixa',
          value: 2,
          date: '21/12/2020',
          amount: '1.000,00',
          percent2: '9,92'
        }
      ]
    }
  }
}
</script>
