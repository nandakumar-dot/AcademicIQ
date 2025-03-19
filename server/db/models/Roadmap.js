import mongoose from "mongoose";
const roadmapSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null }, // Null for public roadmaps
        title: { type: String, required: true },
        description: { type: String },
        visibility: { type: String, enum: ["public", "private"], default: "private" },
        content: { type: Object, required: true }, // Storing full roadmap as JSON
    },
    { timestamps: true }
);

const Roadmap = mongoose.model("Roadmap", roadmapSchema);
export default Roadmap