'use strict'

// Creamos controlador
const controller = {}
// Logger
const log = require('../modules/controllers-log');
// Modelo
// const mongoose = require('mongoose')
const alert = require('../database/schemas/alert')
// const Alert = require('../database').Alert;

// POST
controller.post = function (req, res, next)
{
    log("Funcion post del controlador")
    alert.create(req, res, next)
}

// GET
controller.get = function (req, res, next) {
    log("Funcion get del controlador")
    alert.read(req, res, next)
}

// PATCH
controller.patch = function (req, res, next) {
    log("Funcion patch del controlador")
    alert.update(req, res, next)
}

// DELETE
controller.delete = function (req, res, next) {
    log("Funcion delete del controlador")
    alert.delete(req, res, next)
}

module.exports = controller;
