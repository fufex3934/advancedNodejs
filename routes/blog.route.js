const express = require('express');
const {createBlog,getBlogs} = require('../controller/blog.controller');

const router = express.Router();
router.get("/blogs",getBlogs );

router.post("/blog", createBlog);

module.exports  = router;
