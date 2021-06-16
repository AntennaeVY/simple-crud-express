const express = require("express");
const app = express();
require("./database/database");

const routes = require("./routes/routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", routes);

app.listen(3000, console.log("App listening on PORT 3000"));
