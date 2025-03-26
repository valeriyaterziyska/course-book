const express = require("express");

const configExpress = require("./config/configExpress");
const configHandlebars = require("./config/configHandlebars");

const routes = require("./routes");

const app = express();
const PORT = 5000;

configExpress(app);
configHandlebars(app);

app.use(routes);

app.listen(PORT, () => console.log(`App is listening on port ${PORT}...`));
