const {validationResult} = require('express-validator')
module.exports={
    menu:(req, res)=> {
        res.render('index', { title: 'Express' });
      },
    
    menu2: (req, res)=> {
        let errors = validationResult(req)
        if(errors.isEmpty()){
          let { nombre, color, email} = req.body
        req.session.config ={
          nombre:nombre,
          color:color,
          email:email
        } 
       
          res.render('index', { title: 'Express' });
          
        }else{
        
          res.render('index',{ title: 'Express' ,errors:errors.mapped()});
        }}
    }