//Archivo controlador de rutas

const express = require('express');
const { model } = require('mongoose');
var router = express.Router();

//Importar el modelo de la bdd que exportamos en models
const Alumnos = require('../Models/Alumnos');

//home
router.get('/', async(req,res)=>{
    const listaRegistros = await Alumnos.find();
    //este console.log imprime en consola el objeto listaRegistros que contiene el resultado de la busqueda en la bdd
    console.log('los registros:' + listaRegistros);
    res.render('index', {
        listaRegistros
    });
});

//Callbacks que tendrá el proyecto
router.get('/Formulario', async(req,res)=>{
    res.render('Formulario',{
        mensaje: ''
    });
});

//Callbacks que tendrá el proyecto
router.get('/add', async(req,res)=>{
    console.log(new Alumnos(req.body));
    const objAlumnos = new Alumnos(req.body);
    await objAlumnos.save();

    res.render('Formulario',{
        mensaje: 'Los datos han sido guardados'
    });

});

//callback para editar (1)
router.get('/edit', async(req,res)=> {
    const listaRegistros = await Alumnos.find();
    res.render('edit', {
        listaRegistros
    });
});

//callback para editar (2)
router.get('/edit/:id', async(req,res)=>{
    const {id} = req.params;
    const listaRegisros= await Alumnos.find();
    const alumno = await Alumnos.findById({ _id:id});
    res.render('updateForm', {
        alumno
    });
});

//Callback para editar (3)
router.get('/edit/:id', async(req,res)=>{
    const {id} = req.params;
    await Alumnos.updateOne({ _id: id}, req.body);
    res.redirect('/');
});

module.exports = router;
