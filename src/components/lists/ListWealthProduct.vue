<template>
  <div class="q-pt-lg">
    <span class="text-h6 text-bold">Alocação</span>
    <q-list separator class="rounded-borders">
      <q-item
        v-for="(section, index) in sections"
        :key="index"
        clickable
        v-ripple
        class="bg-white rounded-borders q-py-md"
      >
        <q-item-section avatar>
          <q-circular-progress
            :value="section.value"
            size="47px"
            :thickness="0.32"
            color="warning"
            track-color="grey-3"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-body1"> {{ section.title }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-item-label class="text-body1 text-dark">
            {{ section.percent }}%
            <q-icon name="fas fa-chevron-right" color="grey-5"
          /></q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  name: 'ListSection',
  data () {
    return {
      active: true,
      sections: [
        {
          title: 'Renda Fixa',
          value: 80,
          amount: 'R$ 3.122,64',
          percent: '80,00',
          percent2: '3,02'
        },
        {
          title: 'Outros',
          value: 10,
          amount: 'R$ 1.100,00',
          percent: '10,00',
          percent2: '0,82'
        },
        {
          title: 'Renda Variável',
          value: 2,
          amount: 'R$ 66,89',
          percent: '9,92',
          percent2: '9,92'
        }
      ]
    }
  }
}
</script>
