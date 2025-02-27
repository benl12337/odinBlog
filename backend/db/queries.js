const { PrismaClient } = require('@prisma/client');
const utils = require('../lib/passwordUtils');

const prisma = new PrismaClient();

const db = {
    createUser: async (username, password) => {
        // generate hashed password
        const hashedPassword = await utils.genHash(password);
        await prisma.user.create({
            data: {
                username: username,
                hash: hashedPassword,
            },
        });
    },
    getAllPosts: async () => {
        // get all posts
        const posts = await prisma.post.findMany({
            include: {
                _count: {
                    select: { comments: true },
                }
            },
            orderBy: {
                posted: 'desc',
            }
        });
        const formatted = await posts.map((post)=>({
            ...post,
            commentCount: post._count.comments,
        }));
        return formatted;
    },
    getPost: async (postId) => {
        // get single post
        const post = await prisma.post.findUnique({
            where: {
                id: postId,
            }
        })
        return post;
    },
    createPost: async (userId, postContent) => {
        // create a new post
        await prisma.post.create({
            data: {
                title: postContent.title,
                text: postContent.text,
                authorId: userId,
                status: postContent.status,
            }
        })
    },
    updatePost: async () => {
        // update existing post
    },
    deletePost: async () => {
        // delete existing post
    }
}

module.exports = db;