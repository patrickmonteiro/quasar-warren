<template>
  <div class="q-pt-lg">
    <span class="text-h6 text-bold">Por Seção</span>
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
          <!-- <span class="text-body1">Carteiras</span> -->
          <q-item-label class="text-body1"> {{ section.title }}</q-item-label>
          <q-item-label caption>{{ section.amount }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <div class="text-dark text-body1">
            {{ section.percent }}%
            <q-icon
              name="fas fa-chevron-right"
              color="grey-5"
            />
          </div>
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
          title: 'Carteira',
          value: 100,
          amount: 'R$ 4.122,64',
          percent: 100
        },
        {
          title: 'Conta',
          value: 10,
          amount: 'R$ 100,00',
          percent: 0
        },
        {
          title: 'Trade',
          value: 25,
          amount: 'R$ 527,89',
          percent: 0
        }
      ]
    }
  }
}
</script>
