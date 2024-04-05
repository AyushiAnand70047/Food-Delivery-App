const mongoose = require("mongoose");
const mongoURI =
  'mongodb+srv://goFood:goFood@cluster0.yw1q9gw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true });
        console.log("Connected successfully to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

module.exports = mongoDB;
