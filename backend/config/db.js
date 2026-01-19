const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log('Attempting MongoDB connection...');
    console.log('Connection string:', process.env.MONGO_URI);
    
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: 'careconnect'
    });
    
    console.log("✅ MongoDB Connected Successfully");
    console.log("Database:", mongoose.connection.db.databaseName);
  } catch (error) {
    console.error("❌ DB connection failed:", error.message);
    console.error("Error details:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
