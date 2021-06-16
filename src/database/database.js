const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

mongoose
  .connect("mongodb://localhost:27017/restserver-express", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB is connected");
  })
  .catch((e) => {
    console.log("DB Error: ", e);
  });

autoIncrement.initialize(mongoose.connection);
