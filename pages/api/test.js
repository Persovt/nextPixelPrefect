const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://persovt:mi260376@cluster0.fmkwc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const imageSchema = new mongoose.Schema({
  name: String,
  url: String,
});

const db = mongoose.connection;


export default async (req, res) => {
  console.log(req.body)
  res.status(200).json({})
};
