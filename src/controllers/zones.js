'use strict'

// Creamos controlador
const controller = {}
// Logger
const log = require('../modules/controllers-log');


// POST
controller.post = function (req, res, next) {
    log("Funcion post del controlador")
    next()
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
