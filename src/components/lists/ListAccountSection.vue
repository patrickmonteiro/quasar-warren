<template>
  <div class="q-pt-lg">
    <span class="text-h6 text-bold">Últimas movimentações</span>
    <p class="text-h6 text-grey q-mt-md">Não há movimentações</p>

    <q-list separator class="rounded-borders q-pb-xl">
      <q-item
        v-for="(section, index) in [sections[0]]"
        :key="index"
        clickable
        v-ripple
        class="bg-white rounded-borders q-py-md"
      >
        <q-item-section avatar>
          <svg
            data-v-2d432157=""
            version="1.1"
            viewBox="0 0 48 48"
            class="svg-icon svg-fill"
            data-v-82e5380c=""
            style="width: 56px; height: 56px;"
          >
            <path
              pid="0"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24z"
              fill="#EE2E5D"
            ></path>
            <path
              pid="1"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30 26.875c0 1.277-1.025 2.313-2.289 2.313a.483.483 0 01-.48-.486V18.547c0-.268.215-.485.48-.485h1.809c.265 0 .48.217.48.485v8.328zm-4.615 1.827a.483.483 0 01-.48.486h-1.81a.483.483 0 01-.48-.486V21.33c0-.268.215-.485.48-.485h1.81c.265 0 .48.217.48.485v7.373zm-4.616 0a.483.483 0 01-.48.486H18.48a.483.483 0 01-.48-.486v-8.756c0-.267.215-.485.48-.485h1.809c.265 0 .48.218.48.486v8.755zM27.231 12h-6.462C15.926 12 12 15.967 12 20.86v13.905c0 .268.215.485.48.485h14.75c4.844 0 8.77-3.967 8.77-8.86v-5.53c0-4.893-3.926-8.86-8.77-8.86z"
              fill="#fff"
            ></path>
          </svg>
        </q-item-section>
        <q-item-section>
          <!-- <span class="text-body1">Carteiras</span> -->
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
          <!-- <span class="text-body1">Carteiras</span> -->
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
          <!-- <span class="text-body1">Carteiras</span> -->
          <q-item-label class="text-grey">
            * Só é possivel receber transferências de uma conta da mesma
            titularidade</q-item-label
          >
        </q-item-section>
      </q-item>
    </q-list>
    <q-list class="rounded-borders">
      <q-item clickable v-ripple class="bg-white rounded-borders q-py-md">
        <q-item-section avatar>
          <svg
            data-v-25138ccf=""
            version="1.1"
            viewBox="0 0 32 32"
            class="svg-icon svg-fill"
            style="width: 32px; height: 32px;"
          >
            <circle
              fill="#1bbc58"
              stroke="none"
              pid="0"
              cx="16"
              cy="16"
              r="16"
              _fill="#fff"
            ></circle>
            <path
              fill="#fff"
              stroke="none"
              pid="1"
              d="M14.75 24h2.5v-2.5h-2.5V24zM16 9c-2.762 0-5 2.238-5 5h2.5c0-1.375 1.125-2.5 2.5-2.5s2.5 1.125 2.5 2.5c0 2.5-3.75 2.188-3.75 6.25h2.5c0-2.813 3.75-3.125 3.75-6.25 0-2.762-2.238-5-5-5z"
              _fill="#fff"
            ></path>
          </svg>
        </q-item-section>
        <q-item-section>
          <!-- <span class="text-body1">Carteiras</span> -->
          <q-item-label class="text-body1"> Dúvidas</q-item-label>
        </q-item-section>
        <q-item-section side>
          <div class="text-dark text-body1">
            <q-icon name="fas fa-chevron-right" color="grey-5" />
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
