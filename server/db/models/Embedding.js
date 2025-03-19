import mongoose from "mongoose";

const embeddingSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        roadmapId: { type: mongoose.Schema.Types.ObjectId, ref: "Roadmap", required: true },
        roadmapTitle: { type: String, required: true }, // Useful for display
        vector: { type: Array, required: true }, // The roadmap embedding vector
    },
    { timestamps: true }
);

const Embedding = mongoose.model("Embedding", embeddingSchema);
export default Embedding