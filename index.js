const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const Entity = require("./models/Entity"); // Import the model

const app = express();
const PORT = process.env.PORT || 5000;

require("dotenv").config();
console.log("🔍 DB_URL:", process.env.DB_URL); // Debugging output


// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
const MONGO_URI = process.env.MONGO_URI || "your-mongodb-connection-string-here";
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB ✅"))
.catch(err => console.error("MongoDB Connection Error ❌", err));

// Routes
app.get("/", (req, res) => {
    res.send("Backend is working!");
});

// Fetch all entities
app.get("/entities", async (req, res) => {
    try {
      const entities = await EntityModel.find(); // Replace with your actual model
      res.json(entities);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

// Add a new entity
app.post("/entities", async (req, res) => {
    try {
        const newEntity = new Entity(req.body);
        await newEntity.save();
        res.status(201).json(newEntity);
    } catch (error) {
        res.status(500).json({ error: "Failed to add entity" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});


  
