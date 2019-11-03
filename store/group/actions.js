import { API_HOST } from '../../config/api'

const API_PATH = 'group'

export function load ({ commit }) {
  return this.app.$axios
    .get(`//${API_HOST}/${API_PATH}/list`)
    .then(r =>
      commit('setItems', r.data)
    )
}

export function loadId ({ dispatch }, id) {
  return dispatch('load')
}

export function add ({ commit }, fields) {
  return this.app.$axios
    .post(`//${API_HOST}/${API_PATH}/create`, fields)
}

export function update ({ commit }, fields) {
  return this.app.$axios
    .post(`//${API_HOST}/${API_PATH}/update/${fields.id}`, fields)
    .then(r => console.log(r))
}

export const deleteItem = ({ commit }, id) => {
  this.app.$axios
    .post(`//${API_HOST}/${API_PATH}/`)
    .then(r => console.log(r))
}
