import Router from 'express'
const clientRouter = Router()
import clientController from '../controllers/client.controller.js'
import { check, body, validationResult } from 'express-validator'

clientRouter.get('/', clientController.getClients);
clientRouter.get('/:id', clientController.getOneClient);

clientRouter.post('/',
  [
    check('fullname', 'Длина имени должна быть не менее 1 символа').isLength({ min: 1 }),
    check('passport', 'Некорректно введены паспортные данные').isPassportNumber('RU'),
    check('phone', 'Некорректно введен номер телефона').isMobilePhone('any')
  ], clientController.createClient);

clientRouter.patch('/:id',
  [
    check('fullname', 'Длина имени должна быть не менее 1 символа').isLength({ min: 1 }).optional(),
    check('passport', 'Некорректно введены паспортные данные').isPassportNumber('RU').optional(),
    check('phone', 'Некорректно введен номер телефона').isMobilePhone('any').optional(),
    check('room').optional(),
    check('arrival').optional(),
    check('departure').optional()
  ], clientController.updateClient)

export default clientRouter