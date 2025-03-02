const express = require('express');
const passport = require('passport');
const cors = require('cors');
const app = express();
require('dotenv').config();





const routes = require('./routes/router');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(passport.initialize());

app.get('/', (req,res)=>{
    res.send('home');
})
app.use('/users', routes.userRouter);
app.use('/posts', routes.postRouter);
app.use('/posts/:postId/comments', routes.commentRouter);

app.listen(3000, ()=>{
    console.log('listening on port 3000');
});