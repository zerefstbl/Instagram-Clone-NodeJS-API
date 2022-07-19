const { Router } = require('express');

const UserController = require('../Controllers/UserController');
const LoginController = require('../Controllers/LoginController');
const PostController = require('../Controllers/PostController');
const ProfileController = require('../Controllers/ProfileController');

const router = Router();

router.get('/', (req, res) => {return res.send('Ola Mundo Novamente')});

//User Routes
router.post('/users', UserController.createUser);
router.get('/users', UserController.listUsers);
router.post('/login', LoginController.login);

//Post Routes
router.post('/posts', PostController.createPost);
router.get('/posts', PostController.listAllPosts);
router.put('/posts/:id', PostController.editPost);
router.delete('/posts/:id', PostController.deletePost);

//Profile Routes
router.get('/users/:id', ProfileController.getProfile);

module.exports = router;