import express from "express";
import User from "../models/User.js";
const router = express.Router();

// Create a new user
router.post("/add", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const newUser = new User({ name, email, password }); // Hash password in real-world apps
        await newUser.save();

        res.status(201).json({ message: "User created", user: newUser });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all users
router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router