const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/users_test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection
  .once("open", () => console.log("Good to go!"))
  .on("error", (error) => {
    console.log("Warning ", error);
  });
