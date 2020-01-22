'use strict'

// Creamos controlador
const controller = {}

// POST
controller.post = function (req, res, next) {
    console.log("Funcion post del controlador")
}

// GET
controller.get = function (req, res, next) {
    console.log("Funcion get del controlador")
}

// PATCH
controller.patch = function (req, res, next) {
    console.log("Funcion patch del controlador")
}

// DELETE
controller.delete = function (req, res, next) {
    console.log("Funcion delete del controlador")
}

module.exports = controller;
