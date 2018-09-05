export default context => {
  context.store.dispatch("initAuthAct", context.req)
}
