require('dotenv').config()
const express = require("express");
const ContentModel = require("./Models/Content");
const mongoose = require("mongoose");
const mongoURI=process.env.MONGO_URL
const mongoURI =
  "mongodb+srv://atharva:Pankhuri@cluster0.nrgx27f.mongodb.net/?retryWrites=true&w=majority";
const app = express();
var cors = require("cors");

let PORT = process.env.PORT;
const connectionParams={
    useNewUrlParser:true,
    useUnifiedTopology:true
  }
  app.use(cors());
app.use(express.json());


app.post("/adduser", async (req, res) => {
  const data = new ContentModel({
    name: req.body.name,
    email: req.body.email,
    project: req.body.project,
    message: req.body.message,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
 app.get("/", (req, res) => {
    res.status(200).send("Hello server is running").end();
  });
mongoose
  .connect(mongoURI, connectionParams)
  .then(() => {
    console.info("connected");
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
app.listen(PORT || 5000, () => {
   // console.log(`Example app listening on port ${port}`);
  });
