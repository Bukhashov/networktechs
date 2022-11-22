const { Router } = require('express');
const router = Router();
const User = require('../controllers/user');
const Lecture = require('../controllers/lecture');

router.get('/admin', );
router.get('/admin/new', );
router.post('/add/lecture', Lecture.add);
router.get('/all/lecture', Lecture.all);
router.get('/get/lecture/:title', Lecture.get);
router.get('/delete/lecture/:title', Lecture.delete);

router.post('/singin', User.singin);
router.post('/user/singup', User.singup);

module.exports = router;