const db = require('../db/queries');
const jwt = require('jsonwebtoken');

const postController = {

    // GET ROUTES
    getAllPosts: async (req, res) => {
        const userId = req.user.id;
        console.log('getting all posts...');
        const posts = await db.getAllPosts(userId);
        console.log('posts = ', posts);
        res.json(posts);
    },
    getPost: async (req, res) => {
        const post = await db.getPost(req.params.postId);
        res.json(post);
    },

    // POST ROUTES
    createPost: async (req, res, next) => {
        // get the request body
        const { title, content, status } = req.body;
        console.log('body is: ', req.body);
        const token = req.headers;
        const post = {
            title,
            text: content,
            status,
            authorId: req.user.id,
        }
       await db.createPost(req.user.id, post);
       res.status(201).json({ message: "succesfully created post "});
    }
}

module.exports = postController;