<template>
  <q-page class="bg-light-blue window-height window-width row justify-center items-center">
    <div class="column q-pa-lg">
      <div class="row">
        <h5 class="text-h5 text-white q-my-md">Faça seu registro</h5>
      </div>
      <div class="row">
        <q-card square bordered class="q-pa-xl shadow-1">
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input square clearable v-model="name" type="name" label="Nome e Sobrenome">
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>
              <q-input square clearable v-model="email" type="email" label="Email">
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
              <q-input square clearable v-model="cellPhone" type="phone" label="Telefone celular">
                <template v-slot:prepend>
                  <q-icon name="phone" />
                </template>
              </q-input>
              <q-select square clearable v-model="model" :options="options" label="Função na clínica" emit-value map-options>
                <template v-slot:prepend>
                  <q-icon name="work" />
                </template>
              </q-select>
              <q-input square clearable v-model="password" type="password" label="Password">
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn @click="onRegister()" no-caps unelevated color="light-blue-7" size="lg" class="full-width" label="Criar Conta" :loading="loading">
              <span slot="loading">
                <q-spinner-hourglass class="on-left" />Carregando...
              </span>
            </q-btn>
          </q-card-actions>
          <q-card-section class="text-center">
            <q-btn no-caps to="/" flat color="grey-8" label="Voltar" />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import users from '../../store/modules/users'

@Component
export default class Register extends Vue {
  name = '';
  email = '';
  cellPhone = '';
  model =  '';
  options = [
    { 
      label: 'Atendente',
      value: 'attendant'
    },
    {
      label: 'Profissional de saúde',
      value: 'professional'
    },
    {
      label: 'Administrador',
      value:'administrator'
    }
  ];
  password = '';
  loading = false;

  onRegister() {
    this.loading = true
    users.register({
      name: this.name,
      email: this.email,
      cellPhone: this.cellPhone,
      scope: this.model,
      password: this.password,
    })
    .then(() => this.$router.push('home'))
    .catch((err) => {
      console.log(err)
      this.$q.notify("Please review fields again.")
    })
    this.loading = false
  }
}
</script>
