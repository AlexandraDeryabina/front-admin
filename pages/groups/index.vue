<template>
  <section>
    <b-navbar class="mb-3 mt-md-3">
      <b-navbar-brand href="#" class="d-none d-md-block">{{STORE_TITLE}}</b-navbar-brand>
      <b-navbar-nav class="ml-md-auto list-navbar-buttons">
        <b-button :to="`${STORE_NAME}s/add`" class="mr-md-3 list-navbar-button" variant="success">
          Добавить
        </b-button>
      </b-navbar-nav>
    </b-navbar>
    <b-list-group class="pb-3">
      <b-list-group-item v-for="item in $store.state[STORE_NAME].items" :key="item.id" :to="`${STORE_NAME}s/${item.id}`" class="list-item">
        {{item.name}}
        <div class="float-right">
          <b-button variant="danger" size="sm" @click.prevent="deleteItem(item.id)">Удалить</b-button>
        </div>
      </b-list-group-item>
    </b-list-group>
  </section>
</template>

<script>
const STORE_NAME = 'group'
const STORE_TITLE = 'Группы'

export default {
  layout: 'authorized',
  head () {
    return {
      title: STORE_TITLE
    }
  },
  data () {
    return {
      STORE_NAME,
      STORE_TITLE
    }
  },
  created () {
    this.loadList()
  },
  methods: {
    loadList () {
      this.$store.dispatch(`${STORE_NAME}/load`)
    },
    deleteItem (itemId) {
      this.$store.dispatch(`${STORE_NAME}/deleteItem`, itemId)
        .then(this.loadList)
    }
  }
}
</script>

<style scoped lang="sass">
  .list
    &-item
      line-height: 28px

    &-buttons
      display: none

    &-item:hover &-buttons
      display: block

    @media(max-width: 767px)
      &-navbar-buttons
        width: 100%
        flex-direction: column
        align-items: center

      &-navbar-button
        margin: 20px 0
        width: 100%
        font-size: 120%

</style>
