const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect("mongodb+srv://mayanksahu13032004_db_user:ma8REA9cpqjYs025@cluster0.cnr50m3.mongodb.net/?appName=Cluster0");
  console.log("MongoDB Connected");
};

module.exports = connectDB;
