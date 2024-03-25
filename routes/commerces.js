const express = require('express')
const router = express.Router()

const { validatorCreateCommerce } = require('../validators/commerces')
const { getCommerces, getCommerce, saveCommerce, updateCommerce, deleteCommerce} = require('../controllers/commerces')

router.get('/', getCommerces)
router.get('/:CIF', getCommerce)
router.post('/', validatorCreateCommerce, saveCommerce)
router.put('/:CIF', updateCommerce)
router.delete('/:CIF', deleteCommerce)

module.exports = router
