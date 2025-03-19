import { generateEmbedding } from "./EmbeddingService.js";
import { extractEmbeddableText } from "./CleanData.js";

export async function processRoadmapEmbedding(roadmapJSON) {
    try {
        const cleanTextData = extractEmbeddableText(roadmapJSON);
        const textForEmbedding = cleanTextData.join(" ");  // Convert list to single string

        // ✅ Make sure to await the embedding function
        const embeddedResults = await generateEmbedding(textForEmbedding);

        console.log("Embeddings generated successfully:", embeddedResults);
        return embeddedResults
    } catch (error) {
        console.error("Error generating embeddings:", error);
    }
}
