'use strict'

const mongoose = require('mongoose');

// Log
const log = require('../modules/database-log');

class db {
    /**
     * Constructor
     * @param {Mongoose.Model} Model Es el modelo del recurso del la base de datos
     */
    constructor(Model){
        this.Model = Model;
    }

    /**
     * Create
     * Este metodo sirve para crear un recurso
     * @param {Object} req Request Express
     * @param {Object} res Response Express
     * @param {Object} next Next Middleware Express
     */
    create = function(req, res, next){
        log.info('Creando recurso')

        let body = req.body;
        let instance = new this.Model();
        
        if(Object.keys(body).length > 0){
            for (let param in body) {
                instance[param] = body[param]
            }
        }
        // console.log(instance)

        instance.save((err, resourceStored) => {
            if(err){
                log.error('Error al crear el recurso')
                res.status(500).send(err)
            }else{
                log.info('Recurso creado exitosamente')
                console.log(resourceStored)
                res.status(201).send(resourceStored)
            }
        })
    }

    /**
     * Read
     * Este metodo sirve para leer un recurso o varios
     * @param {Object} req Request Express
     * @param {Object} res Response Express
     * @param {Object} next Next Middleware Express
     */
    read (req, res, next){

        let _id = req.params._id
        if(_id){
            // Lectura de recurso por id
            log.info(`Leyendo alerta ${_id}`)
            this.Model.findById(_id, function (err, resourceRead) {
                if(err){
                    log.error('Error al leer el recurso')
                    res.status(500).send(err)
                }else{
                    log.info('Recurso leido exitosamente')
                    res.status(200).send(resourceRead)
                }
            })
        }else{
            // Lectura general de recursos
            log.info('Leyendo recursos')

            let resourceConsult = {}
            const query = req.query;

            // Filtro de tiempo desde-hasta from-to
            if(query.from || query.to){
                if(query.from && query.to){
                    resourceConsult.time = {
                        $gte: new Date(query.from),
                        $lte: new Date(query.to)
                    }
                }else if(query.from){
                    resourceConsult.time = {
                        $gte: new Date(query.from),
                    }
                }else{
                    resourceConsult.time = {
                        $lte: new Date(query.to)
                    }
                }
            }
            
            // Leemos las propiedades del modelo
            let props = Object.keys(this.Model.schema.paths)
            // Filtramos las propiedades que no pertenecen al modelo
            if (Object.keys(query).length > 0) {
                for (let param in query) {
                    for (let property in props){
                        if(property == param)   resourceConsult[param] = query[param]
                    }
                }
            }
            
            // Busqueda en la base de datos
            this.Model.find(resourceConsult, function (err, resourceRead) {
                if(err){
                    log.error('Error al leer los recursos')
                    res.status(500).send(err)
                }else{
                    log.info('Recursos leidos exitosamente')
                    res.status(200).send(resourceRead)
                }
            })
        }
    }

    /**
     * Update
     * Este metodo sirve para actualizar los valores de un recurso
     * @param {Object} req Request Express
     * @param {Object} res Response Express
     * @param {Object} next Next Middleware Express
     */
    update = function(req, res, next){
        let body = req.body;
        
        let _id = req.params._id
        if(_id){
            this.Model.findByIdAndUpdate(_id, body, function (err, resourceUpdated) {
                if(err){
                    log.error('Error al actualizar el recurso')
                    res.status(500).send(err)
                }else{
                    log.info('Recurso actualizado exitosamente')
                    res.status(200).send(resourceUpdated)
                }
            })
        }else{
            log.error(`Error: ID ${_id} incorrecto`)
        }
    }

    /**
     * Delete
     * Este metodo sirve para eliminar un recurso o varios
     * @param {Object} req Request Express
     * @param {Object} res Response Express
     * @param {Object} next Next Middleware Express
     */
    delete = function(req, res, next){
        let _id = req.params._id
        if(_id){
            this.Model.findByIdAndDelete(_id, function (err, resourceDeleted) {
                if(err){
                    log.error('Error al eliminar el recurso')
                    res.status(500).send(err)
                }else{
                    log.info('Recurso eliminado exitosamente')
                    res.status(200).send(resourceDeleted)
                }
            })
        }else{
            // Eliminacion general de alertas
            log.info('Eliminando recursos')

            let alertConsult = {}
            const query = req.query;

            // Filtro de tiempo desde-hasta from-to
            if(query.from || query.to){
                if(query.from && query.to){
                    alertConsult.time = {
                        $gte: new Date(query.from),
                        $lte: new Date(query.to)
                    }
                }else if(query.from){
                    alertConsult.time = {
                        $gte: new Date(query.from),
                    }
                }else{
                    alertConsult.time = {
                        $lte: new Date(query.to)
                    }
                }
            }
            
            // Leemos las propiedades del modelo
            let props = Object.keys(this.Model.schema.paths)
            // Filtramos las propiedades que no pertenecen al modelo
            if (Object.keys(query).length > 0) {
                for (let param in query) {
                    for (let property in props){
                        if(property == param)   alertConsult[param] = query[param]
                    }
                }
            }

            this.Model.deleteMany(alertConsult, function (err, resourceDeleted) {
                if(err){
                    log.error('Error al eliminar los recursos')
                    res.status(500).send(err)
                }else{
                    log.info('Recursos eliminados exitosamente')
                    res.status(200).send(resourceDeleted)
                }
            })
        }
    }
}

module.exports = db;