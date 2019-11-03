export const loginSuccess = (state, payload) => {
  state.loggedUser = true
}
export const logout = (state, payload) => {
  state.loggedUser = false
}
