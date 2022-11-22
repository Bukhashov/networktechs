const { Router } = require('express');
const router = Router();
const User = require('../controllers/user');

router.get('/admin', );
router.get('/admin/new', );
router.post('/add/lecture',);

router.post('/singin', User.singin);
router.post('/user/singup', User.singup);

module.exports = router;