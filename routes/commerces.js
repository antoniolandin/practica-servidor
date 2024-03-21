const express = require('express')
const router = express.Router()

const { getCommerces, getCommerce, saveCommerce} = require('../controllers/commerces')

router.get('/', getCommerces)
router.get('/:CIF', getCommerce)
router.post('/', saveCommerce)

module.exports = router
