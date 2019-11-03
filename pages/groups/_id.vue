<template>
  <div class="mt-3 mb-3">
    <b-form @submit="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Название"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          :value="item ? item.name : ''"
          @input="val => changeField('name', val)"
          required
          placeholder="Введите название"
        />
      </b-form-group>

<!--      <b-form-group-->
<!--        id="input-group-1"-->
<!--        label="Select"-->
<!--        label-for="input-1"-->
<!--      >-->
<!--        <b-form-select-->
<!--          :value="form.selected"-->
<!--          :options="options"-->
<!--          @input="val => changeField('selected', val)"-->
<!--        />-->
<!--      </b-form-group>-->

      <b-button type="submit" variant="primary">
        Сохранить
      </b-button>
    </b-form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
const STORE_NAME = 'group'

export default {
  layout: 'authorized',
  data () {
    return {
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ],
      form: {
        name: '',
        selected: null
      }
    }
  },
  computed: {
    ...mapGetters({
      itemById: `${STORE_NAME}/itemById`
    }),
    item () {
      return { ...this.itemById(this.$route.params.id) }
    }
  },
  created () {
    if (!this.item && this.$route.params.id !== 'add') {
      this.loadId(this.$route.params.id)
    }
  },
  methods: {
    ...mapActions({
      loadId: `${STORE_NAME}/loadId`
    }),
    changeField (field, value) {
      this.form[field] = value
    },
    onSubmit (evt) {
      evt.preventDefault()
      if (this.$route.params.id !== 'add') {
        this.$store.dispatch(`${STORE_NAME}/update`, { id: this.$route.params.id, ...this.form })
          .then(() => this.loadId(this.$route.params.id))
      } else {
        this.$store.dispatch(`${STORE_NAME}/add`, this.form)
          .then(() => this.$router.push(`/${STORE_NAME}s`))
      }
    }
  }
}
</script>

<style scoped>

</style>
