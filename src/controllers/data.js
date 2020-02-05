'use strict'

// Logger
const log = require('../modules/controllers-log');

// Controlador de la base de datos
const db = require('../database')
// Modelo
const Model = require('../database/models/data')
const database = new db(Model);

// Creamos controlador
const controller = {}
// POST
controller.post = function (req, res, next)
{
    log.info("Funcion post del controlador")
    database.create(req, res, next)
}
// GET
controller.get = function (req, res, next) {
    log.info("Funcion get del controlador")
    database.read(req, res, next)
}
// PATCH
controller.patch = function (req, res, next) {
    log.info("Funcion patch del controlador")
    database.update(req, res, next)
}
// DELETE
controller.delete = function (req, res, next) {
    log.info("Funcion delete del controlador")
    database.delete(req, res, next)
}

module.exports = controller;
