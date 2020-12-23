import { Router } from 'express';

const accountsRoutes = Router();

accountsRoutes.get('/', async (req, res) => {
   return res.json({ message: 'Hello World!' });
});

export default accountsRoutes;
