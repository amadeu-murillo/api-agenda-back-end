var express = require('express');
var router = express.Router();

const AgendaModel = require('../agenda');

const auth = require("../helpers/auth");
/* GET home page. */
router.get('/', function(req, res) {
  let list = AgendaModel.list();
  if(req.query.nome){
    list = AgendaModel.listByname(req.query.nome)
  }else if(req.query.tipo){
    list = AgendaModel.listByTipo(req.query.tipo)
  }

  res.json({count: list.length, lista: list});
});

router.get('/:id',(req,res)=>{
  let obj = AgendaModel.getElementById(req.params.id)
  if(obj){
    res.json({obj:obj})
  }else{
    res.status(404).json({mensagem: "O ID informado não é válido"})
  }
})

//inserir novos registros

router.post('/',auth.validaAcesso, (req,res)=>{
  let{nome,tipo,contato}= req.body;
  if(nome && tipo && contato){
    let obj = AgendaModel.save(nome,tipo,contato)
    res.json({obj: obj})
  }else{
    res.status(400).json({mensagem: "Falha ao inserir o novo registro"})
  }
})

router.put('/:id',(req,res)=>{
  let{nome,tipo,contato}= req.body;
  id = req.params.id
  if(id && nome && tipo && contato){
    let obj = AgendaModel.update(id,nome,tipo,contato)
    if(obj){
      res.json({obj :obj})
    }else{
      res.status(400).json({mensagem: "Id não foi encontrado"})

    }
  }else{
    res.status(400).json({mensagem: "Valores não foram informados corretamente"})

  }

})

//metodo de deletar

router.delete('/:id',(req,res)=>{
  let id = req.params.id
  if(AgendaModel.delete(id)){
    res.json({"mensagem":"Elemento excluido com sucesso"})
  }else{
    res.status(400).json({mensagem: "falha ao excluir"})

  }
  
})

module.exports = router;
