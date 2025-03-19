import express from "express";
import Roadmap from "../models/Roadmap.js";
import { processRoadmapEmbedding } from "../utils/ProcessRoadmapEmbedding.js";

// Add a new roadmap
import Embedding from "../models/Embedding.js";

const router = express.Router();

// Add a new roadmap
router.post("/add", async (req, res) => {
    try {
        const { userId, title, description, content } = req.body;

        // Save the roadmap in the database
        const newRoadmap = new Roadmap({ userId, title, description, content });
        await newRoadmap.save();

        // Convert the roadmap JSON to a string for embedding
        // const roadmapText = JSON.stringify(content);
        
        // Generate an embedding for the roadmap JSON
        const vector = await processRoadmapEmbedding(content);

        // Store the embedding in the 'embeddings' collection
        await Embedding.create({
            userId,
            roadmapId: newRoadmap._id,
            roadmapTitle: title,
            vector,
        });

        res.status(201).json({ message: "Roadmap added with embeddings." });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});




// Get all roadmaps
router.get("/", async (req, res) => {
    try {
        const roadmaps = await Roadmap.find();
        res.status(200).json(roadmaps);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router