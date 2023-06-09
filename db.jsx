
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const mongoUrl = "mongodb://10.0.2.15:27017/?";

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

var connection = mongoose.connection;

connection.on("error", () => {
  console.log("mongodb connection failed");
});

connection.on("connected", () => {
  console.log("mongodb connected");
});

module.exports = mongoose;
