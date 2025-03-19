import express from "express";
import cors from "cors";
// import resourcesRouter from "./resource.js"; 
import connectDB from "./db/config/db.js"; 
import userRoutes from "./db/routes/userRoutes.js";
import roadmapRoutes from "./db/routes/roadmapRoutes.js";


const app = express()

app.use(cors());
app.use(express.json());
// app.use("/resources",resourcesRouter)
app.use("/users", userRoutes);
app.use("/roadmaps", roadmapRoutes);

connectDB();

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));