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

        <q-toolbar-title> </q-toolbar-title>

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

    <q-footer>
      <q-tabs
        v-model="tab"
        dense
        no-caps
        indicator-color="white"
        class="bg-white text-weight-thin text-grey-7"
        active-color="dark"
      >
        <q-route-tab
          name="mails"
          icon="mdi-home"
          label="Visão Geral"
          content-class="text-weight-thin"
          to="/"
        />
        <q-route-tab
          name="alarms"
          icon="fas fa-money-bill-wave"
          label="Conta"
          to="/cash"
        />
        <q-route-tab name="movies" icon="mdi-poll" label="Carteiras" to="/" />
        <q-route-tab
          name="movies"
          icon="mdi-chart-timeline"
          label="Trade"
          to="/"
        />
      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      :content-class="$q.screen.lt.sm ? 'window-width bg-grey-1' : 'bg-grey-1'"
    >
      <q-list>
        <q-item-label header class="text-grey-8">
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container :class="$q.screen.lt.sm ? 'bg-secondary' : 'bg-white'">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
      tab: ''
    }
  }
}
</script>
