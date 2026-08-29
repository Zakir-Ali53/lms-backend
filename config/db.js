const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://aghazakir106_db_user:2uAU5t19JjvzXM8N@ac-brqvsdh-shard-00-00.lggwfm0.mongodb.net:27017,ac-brqvsdh-shard-00-01.lggwfm0.mongodb.net:27017,ac-brqvsdh-shard-00-02.lggwfm0.mongodb.net:27017/?ssl=true&replicaSet=atlas-jj768i-shard-0&authSource=admin&appName=Cluster0");
    console.log("DB Atlas Connected");
  } catch (error) {
    console.error("DB Connection Error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
