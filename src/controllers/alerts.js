'use strict'

// Creamos controlador
const controller = {}
// Logger
const log = require('../modules/controllers-log');
// Modelo
const mongoose = require('mongoose')
const alert = require('../database/schemas/alert')
// const Alert = require('../database').Alert;

// POST
/**
 * Creamos una alerta y la almacenamos en la base de datos
 */
controller.post = function (req, res, next)
{
    log("Funcion post del controlador")
    // console.log(req.body)
    alert.create(req, res, next)
    
    next = function(err, alertStored){
        log(err)
        log(alertStored)
        if(err){
            log('Error al crear la alerta')
            res.status(500).send({message: `Error al crear la alerta: ${err}`})
        }
        log('Alerta creada exitosamente')
        console.log(alertStored)
        res.status(201).send(alertStored)
    }
}

// GET
controller.get = function (req, res, next) {
    log("Funcion get del controlador")
    next()
}

// PATCH
controller.patch = function (req, res, next) {
    log("Funcion patch del controlador")
    next()
}

// DELETE
controller.delete = function (req, res, next) {
    log("Funcion delete del controlador")
    next()
}

module.exports = controller;
