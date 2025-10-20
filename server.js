import express from "express";

const app = express();

// middleware
app.use(express.json());

// demo route
app.get("/", (req, res) => {
  res.send("🚀 Hello from your Express.js App!");
});

app.get("/learn", (req, res) => {
  res.send("🚀 Lets learn express js a node js frame work!");
});

app.get("/api/greet/:name", (req, res) => {
  res.json({ message: `Hello, ${req.params.name}! 👋` });
});

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
