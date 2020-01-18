import Router from 'express/lib/router';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ ok: 'ok' });
});
export default routes;
