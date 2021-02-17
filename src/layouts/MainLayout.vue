<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-light-blue">
      <q-toolbar>
        <q-toolbar-title>
          Quasar TypeScript
        </q-toolbar-title>

        <div>
          <q-btn no-caps unelevated color="red-7" label="Sair" to="/" />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class MainLayout extends Vue {
}

</script>
