export default ({ router }) => {
  router.beforeEach((to, from, next) => {
    const normalized = to.path.toLowerCase();
    if (to.path !== normalized) {
      next(normalized);
    } else {
      next();
    }
  });
}
