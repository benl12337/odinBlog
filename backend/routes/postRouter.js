const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const passport = require('passport');
require("../config/passport")

// GET ROUTES
// get all posts
router.get('/', passport.authenticate("jwt", { session: false }), postController.getAllPosts);

// get specific post
router.get('/:postId', postController.getPost);

// POST ROUTES
// create a new post
router.post('/', passport.authenticate("jwt", { session: false }), postController.createPost);

// PUT ROUTES
// update a post
router.put('/:postId', (req,res)=>{
    res.send(`editing post ${req.params.postId}`);
});

// DELETE ROUTES
// delete a post
router.delete('/:postId', (req,res)=>{
    res.send(`Deleting post ${postId}....`);
})

module.exports = router;