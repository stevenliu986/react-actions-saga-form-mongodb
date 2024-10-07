const express = require("express");
const cors = require("cors");
const app = express();
const apiRouter = require("./router");

app.use(cors());
app.use(apiRouter);
const port = 3000;
app.listen(port, () => {
  console.log(`Server started and is listening at ${port}`);
});
