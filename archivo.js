const express = require('express')
const app = express()

//Habilitar controlador de rutas
const router= express.Router;

//Importar rutas
const indexRoutes = require('./Routes/index');

//Moongose
var mongoose = require('mongoose');

//Definir puerto que me entraga la nuve o una que definamos
const port = process.env.PORT || 3000;

//implementacion de middleware para sever publico
app.use(express.static(__dirname + '/public'));

//Configuracion para entender los datos que vienen desde un html form
app.use(express.urlencoded({extended: false}));

//implementar EJS como motor de plantilla
app.set('views', __dirname + '/Views');
app.set('view engine','ejs');

//Mapear indexRoutes
app.use('/', indexRoutes);

app.get('/', function(req,res){
    res.send('Hola, este es el primer servidor');
})

//Configurar mongoose promesas
mongoose.Promise = global.Promise;

//configurar promise para las promesas
mongoose.connect("mongodb+srv://JuanE:12345@cluster0.dr5py.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(()=>{
    console.log('La conexion a mongoAtlas se hizo correctamente..');
    
    app.listen(port, ()=>{
        console.log('Servidor corriendo en puerto: '+port);
    });
});



