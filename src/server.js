const express = require("express");
const app = express();
require("./database/database");

const routes = require("./routes/routes");

// Middlewares
app.use(express.static(`${__dirname}/public`))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", routes);

// Settings
require("dotenv").config({ path: `${__dirname}/.env` });
app.set("PORT", process.env.PORT || 3000);

app.listen(app.get("PORT"), () => {
  console.log(`App listening on PORT ${app.get("PORT")}`);
});
