const { resolve } = require("path");
const express = require("express");
const configureAPI = require("./configure");

const app = express();

const port = process.env.PORT || 3000;

// API
configureAPI(app);

// UI
const publicPath = resolve(__dirname, "../../dist");
const staticConf = { maxAge: "1y", etag: false };

app.use(express.static(publicPath, staticConf));

// Go
app.listen(port, () => console.log(`App running on port ${port}!`));
