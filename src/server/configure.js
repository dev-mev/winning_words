const bodyParser = require("body-parser");
const api = require("./API/api");

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use("/api", api);
};
