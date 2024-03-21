const express = require('express')
const router = express.Router()

const { getCommerces, getCommerce, createItem } = require('../controllers/commerces')

router.get('/', getCommerces)
router.get('/:CIF', getCommerce)
router.post('/', createItem)

module.exports = router
