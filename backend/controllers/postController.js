const db = require('../db/queries');

const postController = {

    // GET ROUTES
    getAllPosts: async (req, res) => {
        console.log('getting all posts...');
        const posts = await db.getAllPosts();
        res.json(posts);
    },
    getPost: async (req, res) => {
        const post = await db.getPost(req.params.postId);
        res.json(post);
    },

    // POST ROUTES
    createPost: async (req, res, next) => {
        const testUser = {
            id: 1
        }
        const post = {
            title: 'test Title',
            text: 'this is a test post',
            authorId: 1,
        }
        await db.createPost(testUser.id, post);
        next();
    }
}

module.exports = postController;