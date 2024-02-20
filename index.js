const config = require('./config/config');
const express = require("express");
const mongoose = require("mongoose");
const {errorHandler} = require('./middlewares/error');
const app = express();
const blogRouter = require('./routes/blog.route');



mongoose.connect(config.dbConnection).then(() => {
  console.log("Db Connection established");
});


app.use(express.json());
app.use(blogRouter);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`server is listening on ${config.port}`);
});
