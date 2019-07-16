const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

const initRouter = require("./routes");
initRouter(app);

http.Server(app).listen(3000, () => {
  console.log(`Port 3000`);
});
