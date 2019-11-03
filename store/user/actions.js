
export function login (context, data) {
  context.commit('loginSuccess', data)
  this.app.$cookies.set('auth', data)
}

export function logout ({ commit }) {
  commit('logout')
  this.app.$cookies.remove('auth')
  location.reload()
}

export const serverInit = ({ commit, state }, context) => {
  const auth = context.app.$cookies.get('auth')

  if (auth) {
    commit('loginSuccess', auth)
  } else {
    commit('logout')
  }
}
