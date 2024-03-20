const { commerceModel } = require('../models')

// Obtenemos todos los comercios
const getItems = async (req, res) => {
    const data = await commerceModel.find({})
    res.send({data})
}

// Creamos un comercio
const createItem = async (req, res) => {
    const { body } = req
    
    // Creamos el comercio en la base de datos
    const data = await commerceModel.create(body)
    
    // Respondemos con el comercio creado
    res.send(data)
}

// TODO: Implementar los siguientes métodos
const getItem = (req, res) => {}
const updateItem = (req, res) => {}
const deleteItem = (req, res) => {}

module.exports = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
}

