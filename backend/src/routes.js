import Router from 'express/lib/router';

import DevController from './controllers/DevController';

const routes = new Router();
// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros

// Query Params: req.query (filtros, ordenação, paginação...)
// Route Partams: req.params (Identificar um recurso para alterar)
// Body: req.body (Dados para criação ou alteração de algo)

routes.post('/devs', DevController.create);

export default routes;
