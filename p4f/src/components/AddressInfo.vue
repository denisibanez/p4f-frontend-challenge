<template>
  <div class="address-wrapper">
    <div v-if="userSelect">
      <p>
        <strong>Nome:</strong>
        {{userSelect.name}}
      </p>
      <p>
        <strong>Endereço:</strong>
        <br>
        <strong>Rua:</strong> {{userSelect.address.street}} - {{userSelect.address.suite}}<br>
        <strong>Cidade:</strong> {{userSelect.address.city}}<br>
        <strong>Cep:</strong> {{userSelect.address.zipcode}}
      </p>
    </div>

    <div v-else>
      <p>Carregando...</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'address-info',

  computed: {
    ...mapGetters({
      userSelect: 'userSelect',
    }),
  },
}
</script>

<style lang="scss" scoped>
.address-wrapper {
  padding: 25px 25px 0;
}
</style>