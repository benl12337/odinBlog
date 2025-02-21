const express = require('express');
const router = express.Router({ mergeParams: true });

// GET ROUTES
// get comments on a specific post
router.get('/', (req,res)=>{
    res.send(`looking at comments for post ${req.params.postId}`);
});
router.get('/:commentId', (req,res)=>{
    res.send('getting specific comment...')
});

// POST ROUTES
router.post('/', (req,res)=>{
    res.send('posting comment');
})

// PUT ROUTES
router.put('/:commentId', (req,res)=>{
    res.send('updating comment');
});


// DELETE ROUTES
router.delete('/:commentId', (req,res)=>{
    res.send('deleting commment');
});

module.exports = router;