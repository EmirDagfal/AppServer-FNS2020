'use strict'

// Logger
const log = require('../modules/controllers-log');

// Controlador de la base de datos
const db = require('../database')
// Modelo
const Model = require('../database/schemas/alert')
const alert = new db(Model);

// Creamos controlador
const controller = {}
// POST
controller.post = function (req, res, next)
{
    log.info("Funcion post del controlador")
    alert.create(req, res, next)
}
// GET
controller.get = function (req, res, next) {
    log.info("Funcion get del controlador")
    alert.read(req, res, next)
}
// PATCH
controller.patch = function (req, res, next) {
    log.info("Funcion patch del controlador")
    alert.update(req, res, next)
}
// DELETE
controller.delete = function (req, res, next) {
    log.info("Funcion delete del controlador")
    alert.delete(req, res, next)
}

module.exports = controller;
