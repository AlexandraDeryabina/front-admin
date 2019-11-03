export const itemById = state => (id) => {
  if (!id || state.items.length === 0) {
    return null
  }

  // eslint-disable-next-line eqeqeq
  return state.items.find(item => item.id == id) || null
}
