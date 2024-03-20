const { getItems, getItem } = require('../controllers/commerces')

router.get('/', getItems)
router.get('/:id', getItem)
