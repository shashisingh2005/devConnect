const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://k3ssolution:jwgxrXZ4aHk7nKcm@k3ssolutions.akclj.mongodb.net/");
};

module.exports = connectDB;