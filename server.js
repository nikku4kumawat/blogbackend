// server.js

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const postRoutes = require("./routes/postRoutes");

dotenv.config();

// ✅ Connect to Database
connectDB();

const app = express();

// ✅ Middlewares
app.use(cors());
app.use(express.json());

// ✅ Routes
app.use("/api/post", postRoutes);

// ✅ Testing route
app.get("/", (req, res) => {
  res.send("Image Social Backend Running 🚀");
});

// ✅ Server port
const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});