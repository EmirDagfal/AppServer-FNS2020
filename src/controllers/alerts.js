'use strict'

// Creamos controlador
const controller = {}
// Logger
const log = require('../modules/controllers-log');
// Modelo
// const mongoose = require('mongoose')
const db = require('../database')
const Model = require('../database/schemas/alert')
const alert = new db(Model);
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
