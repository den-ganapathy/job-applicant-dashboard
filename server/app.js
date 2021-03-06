const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const app = express();
var cors = require("cors");

const uri =
  "mongodb+srv://den:den123@cluster0.rn771.mongodb.net/jobs_data?retryWrites=true&w=majority";
mongoose
  .connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() =>
    app.listen(process.env.port || 8080, () => {
      console.log("listening for request");
    })
  )
  .catch((err) => console.log(err));
app.use(bodyparser.json());
app.use(cors());
app.use("/api", require("./routes/api"));
