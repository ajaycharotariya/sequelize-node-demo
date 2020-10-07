var express = require('express');
var router = express.Router();
var controllers = require('../controllers/index')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// save user
router.post('/users', controllers.createUser);
// update user
router.put('/updateUsers/:userId', controllers.updateUser);
// delete user
router.delete('/deleteUsers/:userId', controllers.deleteUser);
// get users
router.get('/getUsers', controllers.getUsers);
router.post('/addArticle', controllers.addArticle);
router.post('/innerJoinTable', controllers.innerJoin);
router.post('/leftJoinTable', controllers.leftJoin);
router.post('/rightJoinTable', controllers.rightJoin);
router.post('/addComments', controllers.addComments);
router.get('/getComments', controllers.getComments);
router.post('/restoreSoftDelRecords', controllers.restoreSoftDelRecords);
router.post('/addTag', controllers.addTag);
router.post('/addArticleTags', controllers.addArticleTags);
router.get('/articleTags', controllers.articleTags);
module.exports = router;
