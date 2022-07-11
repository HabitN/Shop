const Router = require('express')
const router = new Router()
const deviceController = require('../controllers/deviceController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', deviceController.create) // checkRole('ADMIN'), 
router.get('/:id', deviceController.getOne)
router.post('/delete/:id([0-9]+)',  deviceController.delete) //checkRole('ADMIN'),

module.exports = router