const { Router } = require('express');
const router = Router();
const User = require('../controllers/user');
const Lecture = require('../controllers/lecture');
const Test = require('../controllers/tests');
const Media = require('../controllers/media');

// USER
router.post('/user/signin', User.signin);
router.post('/user/signup', User.signup);
// ADMIN
router.post('/admin/singin');
router.post('/admin/singup');
// LECTURE
router.get('/all/lecture', Lecture.all);
router.post('/add/lecture', Lecture.add);
router.get('/get/lecture/:title', Lecture.get);  // get on
router.get('/delete/lecture/:title', Lecture.delete); // delete
// TESTS
router.get('/get/test/:title', Test.get);
router.post('/control/test', Test.control);
router.post('/new/test', Test.new);
// Media
router.get('/getall/media', Media.getAll);
router.post('/new/media', Media.new);

router.get('/get/certificate', (req, res)=> {
    res.sendFile('../../public/images/certificate.jpg')
})

module.exports = router;