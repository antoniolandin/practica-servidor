const express = require('express')
const router = express.Router()

const { getCommerces, getCommerce, saveCommerce, updateCommerce, deleteCommerce} = require('../controllers/commerces')

router.get('/', getCommerces)
router.get('/:CIF', getCommerce)
router.post('/', saveCommerce)
router.put('/:CIF', updateCommerce)
router.delete('/:CIF', deleteCommerce)

module.exports = router
