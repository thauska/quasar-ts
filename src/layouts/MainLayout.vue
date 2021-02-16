<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-light-blue">
      <q-toolbar>
        <q-toolbar-title>
          Quasar TypeScript
        </q-toolbar-title>

        <div>
          <q-btn label="Login" />
          <q-btn label="Registrar" />
          <q-btn color="red" label="Sair" />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  }
]

import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'MainLayout',
  components: { EssentialLink }
})
</script>
