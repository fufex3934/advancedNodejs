const Blog = require('../models/blog.model');
const {createBlogSchema} = require('../validations/blog.validation');


const getBlogs = async (req, res) => {
    try {
      const blogs = await Blog.find({});
      res.send({ blogs });
    } catch (error) {
      res.status(500).send({ error: true, message: "error occurred" });
    }
  }

  const createBlog = async (req, res) => {
    //create a blog
    
    try {
        const value = await createBlogSchema.body.validateAsync(req.body);
      await Blog.create(value);
      res
        .send({ blogs: true, message: "blog created successfully" })
        .catch((error) => console.log(error));
    } catch (error) {
      res.status(500).send({ error: true, message: "error occured" });
    }
  }

  module.exports = {
    createBlog,
    getBlogs,
  }