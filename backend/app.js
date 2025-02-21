const express = require('express');
const cors = require('cors');
const app = express();

const routes = require('./routes/router');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req,res)=>{
    res.send('home');
})
app.use(cors());
app.use('/users', routes.userRouter);
app.use('/posts', routes.postRouter);
app.use('/posts/:postId/comments', routes.commentRouter);
app.listen(3000, ()=>{
    console.log('listening on port 3000');
});