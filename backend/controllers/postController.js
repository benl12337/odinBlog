const db = require('../db/queries');
const jwt = require('jsonwebtoken');

const postController = {

    // GET ROUTES
    getPublicPosts: async (req,res) => {
        const posts = await db.getAllPublishedPosts();
        console.log('getting published posts...');
        console.log(posts);
        res.json(posts);
    },
    getAllPosts: async (req, res) => {
        const userId = req.user.id;
        console.log('getting all posts...');
        const posts = await db.getAllPosts(userId);
        console.log('sending: ', posts);
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
    },
    editPost: async (req,res,next) => {
        // get the request body
        console.log('updating post....');
        const { title, text, status } = req.body;
        const token = req.headers;
        const postId = Number(req.params.postId);
        const post = {
            title,
            text,
            status,
            authorId: req.user.id,
            lastEdited: new Date(),
        };
       await db.updatePost(postId, post);
       res.status(201).json({ message: "succesfully updated post "});
    }
}

module.exports = postController;