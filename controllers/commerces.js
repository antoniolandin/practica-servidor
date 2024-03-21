const { commerceModel } = require('../models')

// Creamos un comercio
const createItem = async (req, res) => {
    const { body } = req
    
    // Creamos el comercio en la base de datos
    const data = await commerceModel.create(body)
    
    // Respondemos con el comercio creado
    res.send(data)
}

const deleteItem = (req, res) => {
    const { id } = req.params
    commerceModel.findByIdAndDelete(id, (err, data) => {
        if (err) {
            res.status(500).send({ message: 'Error al eliminar el comercio' })
        } else {
            res.send({ message: 'Comercio eliminado correctamente' })
        }
    })
}

// 1. Obtener la lista de comercios y, opcionalmente (vía parámetro query), ordenarlos por el CIF ascendentemente
getCommerces = async (req, res) => {
    const ascending = req.query.asc
    const data = await commerceModel.find({})

    if (ascending === 'true') {
        data.sort((a, b) => a.CIF.localeCompare(b.CIF))
        res.send({data})
    }
    else {
        res.send({data})
    }
    
}

// 2. Obtener un comercio por su CIF
getCommerce = async (req, res) => {
    const { CIF } = req.params
    const data = await commerceModel.findOne({ "CIF": CIF })
    res.send({data})
}

module.exports = {
    createItem,
    getCommerces,
    getCommerce,
    deleteItem,
    getCommerces,
    getCommerce
}

