const express = require('express');
//import routes
const userRoutes = require('./routes/user.routes');
const postRoutes = require('./routes/post.routes');
const authRoutes = require('./routes/auth.routes');
const commentRoutes = require('./routes/comment.routes');

// middleware for handling errors
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);

app.use('/api/posts', postRoutes);

app.use('/api/auth', authRoutes);

app.use('/api/comments', commentRoutes); // cha

app.use(errorHandler);

module.exports = app;


