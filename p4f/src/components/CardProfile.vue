<template>
  <b-card-group deck>
    <b-card header="Empresa">
      <b-media tag="li">
        <template v-slot:aside>
          <b-avatar variant="primary" src="https://placekitten.com/300/300"></b-avatar>
        </template>
        <h5 class="mt-0 mb-1">Usuário</h5>
        <p class="mb-0">Nome</p>
      </b-media>
    </b-card>
  </b-card-group>
</template>

<script>
export default {
  name: 'card-profile',

  data () {
    return {
      items: [
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
</style>