<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-secondary text-dark" bordered>
      <q-toolbar>
        <q-avatar
          color="dark"
          text-color="white"
          size="md"
          @click="leftDrawerOpen = !leftDrawerOpen"
        >
          <strong> P </strong>
        </q-avatar>

        <q-toolbar-title>
          <q-tabs
            align="justify"
            indicator-color="dark"
            class="bg-secondary text-grey-7 gt-xs"
            active-color="dark"
          >
            <q-route-tab
              v-for="(tab, index) in tabs"
              :key="index"
              :label="tab.title"
              :to="tab.route"
            />
          </q-tabs>
        </q-toolbar-title>

        <q-avatar
          color="dark"
          text-color="white"
          size="md"
          @click="leftDrawerOpen = !leftDrawerOpen"
        >
          <q-icon name="fas fa-gift" />
        </q-avatar>
      </q-toolbar>
    </q-header>

    <q-footer class="lt-sm">
      <q-tabs
        align="justify"
        dense
        no-caps
        indicator-color="white"
        class="bg-white text-weight-thin text-grey-7"
        active-color="dark"
      >
        <q-route-tab
          v-for="(tab, index) in tabs"
          :key="index"
          :icon="tab.icon"
          :label="tab.title"
          content-class="text-weight-thin"
          :to="tab.route"
        />
      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      overlay
      elevated
      :width="360"
      behavior="mobile"
      :content-class="$q.screen.lt.sm ? 'window-width bg-secondary' : 'bg-white'"
    >
      <q-list>
        <q-item class="bg-secondary">
          <q-item-section>
          <q-item-label header class="text-dark text-weight-bolder">
            <div class="absolute-left q-pt-md q-pl-md">
               <q-btn
                  icon="mdi-close"
                  dense
                  flat
                  @click="leftDrawerOpen = !leftDrawerOpen"
                />
            </div>
            <div class="text-center">
              Menu
            </div>
          </q-item-label>
          </q-item-section>
        </q-item>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container :class="$q.screen.lt.sm ? 'bg-secondary' : 'bg-white q-px-lg'">
      <skeleton v-if="loading" />
      <transition
         v-else
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <router-view />
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import Skeleton from 'pages/Skeleton.vue'
const linksData = [
  {
    title: 'NOTIFICAÇÕES',
    icon: 'fas fa-chevron-right',
    route: '/',
    bold: true
  },
  {
    title: 'MINHA CONTA',
    icon: 'fas fa-chevron-right',
    route: '/',
    bold: true
  },
  {
    title: 'Meus investimentos',
    route: '/',
    bold: false
  },
  {
    title: 'Custos',
    route: '/',
    bold: false
  },
  {
    title: 'Previdência',
    route: '/',
    bold: false
  },
  {
    title: 'Warren News',
    route: '/',
    bold: false
  },
  {
    title: 'Me Ajuda',
    route: '/',
    bold: false
  },
  {
    title: 'Segurança',
    route: '/',
    bold: false
  }
]

export default {
  name: 'MainLayout',
  components: {
    EssentialLink,
    Skeleton
  },
  watch: {
    $route (val) {
      if (val.meta.skeleton) {
        this.loading = true
        setTimeout(() => {
          this.loading = false
        }, 750)
      }
    }
  },
  data () {
    return {
      loading: false,
      leftDrawerOpen: false,
      essentialLinks: linksData,
      tabs: [
        {
          title: 'Visão Geral',
          icon: 'mdi-home',
          route: '/'
        },
        {
          title: 'Conta',
          icon: 'fas fa-money-bill-wave',
          route: '/cash'
        },
        {
          title: 'Carteiras',
          icon: 'mdi-poll',
          route: '/wealth'
        },
        {
          title: 'Trade',
          icon: 'mdi-chart-timeline',
          route: '/trade'
        }
      ]
    }
  }
}
</script>

<style>
.bg-padding {
  padding: 0 240px;
}
</style>
