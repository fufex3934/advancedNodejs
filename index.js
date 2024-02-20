const config = require('./config/config');
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const blogRouter = require('./routes/blog.route');

app.use(express.json());
app.use(blogRouter);

mongoose.connect(config.dbConnection).then(() => {
  console.log("Db Connection established");
});





app.listen(config.port, () => {
  console.log(`server is listening on ${config.port}`);
});
