const indexController = require('../controllers/index.controller');
const postController = require('../controllers/post.controller');
const galeriController = require('../controllers/galeri.controller');
const tempatController = require('../controllers/tempat.controller');
const kulinerController = require('../controllers/kuliner.controller');
const auth = require('../middlewares/auth');

const router = require('express').Router();

router.get('/', indexController.index);
router.get('/galeri', galeriController.index);
router.get('/tempat', tempatController.index);
router.get('/kuliner', kulinerController.index);

router.get('/posts', postController.index);
router.get('/posts/create', postController.create);
router.post('/posts/store', postController.store);
router.get('/posts/edit/:id', postController.edit);
router.post('/posts/update/:id', postController.update);
router.post('/posts/delete/:id', postController.destroy);

module.exports = router;
