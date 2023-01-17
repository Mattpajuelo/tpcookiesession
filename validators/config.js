const { check } = require('express-validator')
module.exports=[ 
    check('nombre')
    .notEmpty().withMessage('Debes ingresar su nombre'),
    check('color').notEmpty().withMessage('Debes elegir un color'),
    check('email').notEmpty().withMessage('Debes ingresar tu correo')
]
