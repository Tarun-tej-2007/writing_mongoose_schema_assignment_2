const express = require('express');
const { resolve } = require('path');
const mongoose = require( 'mongoose');
const BlogPost = require('./schema');

const app = express();
const port = 3010;

app.use(express.static('static'));

const MONGOURL = 'mongodb+srv://taruntej947:qXwyBVdljaYy4Kmq@cluster0.hcdp4.mongodb.net/Assignment2?retryWrites=true&w=majority&appName=Cluster0'

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});
app.post('/test_with_mongoose', async (req,res) => {
  try {
    await mongoose.connect(MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true });
    const newBlogPost = new BlogPost({
      title: "New Blog Post",
      content: "This is a new blog post",
    
  } catch (error) {
    error.response.status(500).send(error.message);
  }
});
app.get('/test_with_mongoose', async (req, res) => {
  try {
    await mongoose.connect(MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true });
    const blogPosts = await BlogPost.find();
    res.json(blogPosts);
  } catch (error) {
    res.status(500).send(error.message);
  }
}); 
app
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
