var express = require('express');
var {engine} = require('express-handlebars');

var app = express();

app.engine('handlebars',engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

//Rotas
app.get('/',function(request,response){
    response.render('index');
});

app.get('/onde',function(request,response){
    response.render('onde');
});

app.get('/cadastro',function(request,response){
    response.render('cadastro');
});

app.listen(3000);


