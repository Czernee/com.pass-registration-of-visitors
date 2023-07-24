import Router from 'express'
const clientRouter = new Router()
import clientController from '../controllers/client.controller.js'
import { check, body, validationResult } from 'express-validator';

clientRouter.get('/user', clientController.getClients);
clientRouter.get('/user/:id', clientController.getOneClient);

clientRouter.post('/user',
  [
    check('fullName', 'Длина имени должна быть не менее 1 символа').isLength({ min: 1 }),
    check('passport', 'Некорректно введены паспортные данные').isPassportNumber(),
    check('phone', 'Некорректно введен номер телефона').isMobilePhone() 
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    clientController.createClient(req, res);
  }
)

clientRouter.patch('/user',
  [
    check('fullName', 'Длина имени должна быть не менее 1 символа').isLength({ min: 1 }),
    check('passport', 'Некорректно введены паспортные данные').isPassportNumber(),
    check('phone', 'Некорректно введен номер телефона').isMobilePhone()
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    clientController.updateClient(req, res);
  }
)

export default clientRouter


