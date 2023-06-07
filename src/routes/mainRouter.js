// cada enrutador esta acompañado de un controlador

// requiero express
const express=  require('express')
// invoco router
const router= express.Router();
// requiero el controller
const controller = require('../controllers/mainController')

// creo las rutas
router.get('/',controller.index);

router.get('/detalle/:id',controller.detalle);



module.exports= router;