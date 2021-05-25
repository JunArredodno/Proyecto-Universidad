//Configurador del modelo de bdd

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Esquema de la bdd

const Alumnoesquema = new Schema({
    nombre: String,
    telefono: String,
    comentario: String
});

//Exportar coleccion Alumnos

module.exports = mongoose.model('Alumnos',Alumnoesquema);

