// install express with `npm install express`

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

//Routes
app.use("/user", require("./routes/userRoute"));
app.use("/receipt", require("./routes/receipt"));
app.use("/transaction", require("./routes/transaction"));

//Connect to mongo Db
const uri =
  "mongodb://kaustubh:kaustubh786@ac-5xhog3b-shard-00-00.1ct2btc.mongodb.net:27017,ac-5xhog3b-shard-00-01.1ct2btc.mongodb.net:27017,ac-5xhog3b-shard-00-02.1ct2btc.mongodb.net:27017/?ssl=true&replicaSet=atlas-ove0jr-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB");
  }
);
// app.get("/", (req, res) => res.send("Hello World!"));

app.use("/", (req, res, next) => {
  res.json({ message: "Hello datta mandir " });
});

const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Server is Runnig at Port Number:${PORT}`);
});

// export 'app'
module.exports = app;
