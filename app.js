const express = require('express')
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const AgendaRouter = require('../api-agenda/routes/index');
app.use('/agenda',AgendaRouter);

const loginRouter = require('../api-agenda/routes/login');
app.use('/',loginRouter);

app.listen(3001, ()=>{
  console.log("Rodando... ");
})



module.exports = app;
