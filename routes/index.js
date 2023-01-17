var express = require('express');
var router = express.Router();
const vali=require('../validators/config')

let {menu,menu2}=require('../controllers/index')


/* GET home page. */
router.get('/',menu);
router.post('/',vali,menu2)
module.exports = router;
