const { PrismaClient } = require('@prisma/client');
const utils = require('../lib/passwordUtils');

const prisma = new PrismaClient();

const db = {
    createUser: async (username, password, secret) => {
        // generate hashed password
        const hashedPassword = await utils.genHash(password);
        await prisma.user.create({
            data: {
                username: username,
                hash: hashedPassword,
                role: secret === process.env.STAFF_PW ? 'ADMIN' : 'USER'
            },
        });
    },
    getUserById: async (userId) => {
        const user = await prisma.user.findUnique({
            where: {
                id: userId,
            }
        })
        return user;
    },
    getUserByName: async (username) => {
        const user = await prisma.user.findUnique({
            where: {
                username: username,
            }
        })
        return user;
    },
    getAllPosts: async (userId) => {
        // get all posts
        const posts = await prisma.post.findMany({
            where: {
                ...(userId && { authorId: userId }), 
            },
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
    getAllPublishedPosts: async (userId) => {
        // get all posts
        const posts = await prisma.post.findMany({
            where: {
                status: 'PUBLISHED',
            },
            include: {
                author: true,
                _count: {
                    select: { comments: true },
                }
            },
        });

        const formatted = posts.map((post)=>({
            ...post,
            username: post.author.username,
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
    updatePost: async (postId, post) => {
        // update existing post
        await prisma.post.update({
            where: {
                id: postId,
            },
            data: {
                ...post
            },
        })
    },
    deletePost: async () => {
        // delete existing post
    }
}

module.exports = db;