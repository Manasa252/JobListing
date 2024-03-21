const express = require("express");
const cors = require('cors'); 
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./models/User");
const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors({
  origin: ['http://localhost:3000', 'https://job-listing-xi-six.vercel.app'],
    credentials: true
  }));
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/LoginDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("MongoDB connected");
})
.catch((error) => {
  console.error("MongoDB connection error:", error);
});

app.get("/",(req,res)=>{
  res.json("Hello");
})
// Signup route
app.post("/api/signup", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "Name, email, and password are required" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email is already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);


    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "Signup successful", user: { _id: newUser._id, email: newUser.email } });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Login route
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    res.json({ message: "Login successful", user: { _id: user._id, email: user.email } });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Server error" });
  }
});
// Password reset route
app.post("/api/resetpassword", async (req, res) => {
  const { email, newPassword } = req.body;

  if (!email || !newPassword) {
    return res.status(400).json({ error: "Email and new password are required" });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    console.error("Password reset error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// const express = require("express");
// const mongoose = require("mongoose");
// const User = require("./models/User"); // Create the Item model

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Connect to MongoDB mongodb://localhost:27017
// mongoose.connect("mongodb://0.0.0.0:27017/Login", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => {
//   console.log("MongoDB connected");
// })
// .catch((error) => {
//   console.error("MongoDB connection error:", error);
// });

// // Define routes
// app.get("/api/users", async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Server Error");
//   }
// });

// // Start the server
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// //SERVER.JS
// const express = require("express");
// const app = express();
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost/Users", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const Item = require("./models/Item"); // Create the Item model

// app.get("/api/items", async (req, res) => {
//   try {
//     const items = await Item.find();
//     res.json(items);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Server Error");
//   }
// });

// // server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const userRoutes = require('./controllers/routes/userRoutes');

// const app = express();

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('Error connecting to MongoDB:', err));

// // Middleware
// app.use(bodyParser.json());

// // Routes
// app.use('/api/users', userRoutes);

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
