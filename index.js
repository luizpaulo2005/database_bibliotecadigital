var express = require('express');
var app = express();
var cors = require('cors');
var porta = 4000;

var {campus} = require('./models');
var {curso} = require('./models');

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.set('view engine', 'ejs');

// Rota "/"

app.get("/", async function(req, res){
    res.render("index")
})

//Campus

app.get("/campus", async function(req, res){
    var mostrar = await campus.findAll();
    res.json(mostrar);
})

app.get("/campus/:id", async function(req, res){
    var mostrar = await campus.findByPk(req.params.id);
    res.json(mostrar)
})

app.post("/campus", async function(req, res){
    var adicionar = await campus.create(req.body);
    res.json(adicionar);
})

app.put("/campus/:id", async function(req, res){
    var atualizar = await campus.update(req.body, {where: {id:req.params.id}});
    res.json(atualizar);
})

app.delete("/campus/:id", async function(req, res){
    var apagar = await campus.destroy({where: {id:req.params.id}});
    res.json(apagar);
})

//Curso

app.get("/curso", async function(req, res){
    var mostrar = await curso.findAll();
    res.json(mostrar);
})

app.get("/curso/:id", async function(req, res){
    var mostrar = await curso.findByPk(req.params.id)
    res.json(mostrar);
})

app.post("/curso", async function(req, res){
    var adicionar = await curso.create(req.body);
    res.json(adicionar);
})

app.put("/curso/:id", async function(req, res){
    var atualizar = await curso.update(req.body, {where: {id:req.params.id}});
    res.json(atualizar);
})

app.delete("/curso/:id", async function(req, res){
    var apagar = await curso.destroy({where: {id:req.params.id}})
    res.json(apagar)
})

app.listen(porta, function(){
    console.log("O servidor está rodando na porta http://localhost:" + porta)
})