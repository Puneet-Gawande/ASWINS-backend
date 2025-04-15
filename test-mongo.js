const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://PUNEET_User:PUpr3003@aswins-cluster0.my0ypvo.mongodb.net/Aswins_db?retryWrites=true&w=majority"
, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ Connection error:", err));
