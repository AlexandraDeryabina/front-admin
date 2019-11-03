<template>
  <b-row>
    <b-list-group>
      <b-list-group-item to="/groups" :active="isActive('groups')">
        Группы
      </b-list-group-item>
      <b-list-group-item to="/criterias" :active="isActive('criterias')">
        Критерии
      </b-list-group-item>
      <b-list-group-item to="/properties" :active="isActive('properties')">
        Свойства
      </b-list-group-item>
    </b-list-group>
  </b-row>
</template>

<script>
export default {
  methods: {
    isActive (name) {
      return this.$route.name === name
    }
  }
}
</script>

<style scoped lang="scss">
.list-group {
  width: 100%;
  border-right: 1px solid #ccc;
  overflow: auto;

  a {
    border-radius: 0;
  }
}
</style>
