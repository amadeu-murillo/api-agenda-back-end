const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();

router.post('/login',(req,res)=>{
    let {usuario,senha} = req.body;
    if(usuario != "" && usuario == senha){
        let token = jwt.sign({usuario : usuario},'123"@', {expiresIn: '10 min'});
        res.json({logged : true, token:token});
    }else{
        res.status(403).json({logged : false, mensagem: 'usuário e senha inválidos!'})
    }
})







module.exports = router;