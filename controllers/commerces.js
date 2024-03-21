const { commerceModel } = require('../models')

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

    // Obtenemos el parámetro de query
    const ascending = req.query.asc

    // Obtenemos los comercios de la base de datos
    const data = await commerceModel.find({})

    // Si el parámetro de query es 'true', ordenamos los comercios por CIF
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

    // Obtenemos el CIF del parámetro de la URL
    const CIF = req.params.CIF
    
    // Si no se ha pasado el CIF, respondemos con un error
    if (!CIF) {
        res.status(400).send({ message: 'Falta el CIF' })
        return
    }
    
    // Buscamos el comercio en la base de datos
    const data = await commerceModel.findOne({ "CIF": CIF })

    // Si no se ha encontrado el comercio, respondemos con un error
    if (!data) {
        res.status(404).send({ message: 'No se ha encontrado el comercio' })
        return
    }

    res.send({data})
}

// 3. Guardar un comercio
const saveCommerce = async (req, res) => {

    // Obtenemos el cuerpo de la petición (objeto json del comercio)
    const { body } = req
    
    // Creamos el comercio en la base de datos
    const data = await commerceModel.create(body)
    
    // Respondemos con el comercio creado
    res.send(data)
}

module.exports = {
    getCommerces,
    getCommerce,
    saveCommerce,
    deleteItem,
}
