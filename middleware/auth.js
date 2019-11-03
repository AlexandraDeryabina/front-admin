export default function ({ store, redirect }) {
  if (!store.state.user.loggedUser) {
    redirect('/auth')
  }
}
