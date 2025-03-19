// const { GoogleGenerativeAI } = require('@google/generative-ai');
import { GoogleGenerativeAI } from "@google/generative-ai";
/**
 * Generate an embedding for a text using Google's Generative AI
 * @param {string} text - The text to generate an embedding for
 * @param {string} apiKey - Google API key
 * @returns {Promise<number[]>} - The embedding vector
 */
const apiKey = 'AIzaSyD3XxO63WIxivNqtsh9602JEBCAl44F2wU' 
export async function generateEmbedding(text) {
  try {
    // Initialize the Google Generative AI client
    const genAI = new GoogleGenerativeAI(apiKey);
    
    // Get the embedding model
    const embeddingModel = genAI.getGenerativeModel({ model: "embedding-001" });
    
    // Generate the embedding
    const result = await embeddingModel.embedContent(text);
    
    // Return the embedding values
    return result.embedding.values;
  } catch (error) {
    console.error("Error generating embedding:", error);
    throw error;
  }
}



// // Example usage
// async function testEmbedding() {
//   const apiKey = 'AIzaSyD3XxO63WIxivNqtsh9602JEBCAl44F2wU';
//   const text = "This is a sample text for embedding generation";
  
//   try {
//     console.log(`Generating embedding for text: "${text}"`);
//     const embedding = await generateEmbedding(text);
    
//     console.log(`✅ Generated embedding with ${embedding.length} dimensions`);
//     console.log(`First 5 values: [${embedding.slice(0, 5).join(', ')}]`);
    
//     return embedding;
//   } catch (error) {
//     console.error("Failed to generate embedding:", error);
//   }
// }

// testEmbedding()
// Run the test if this file is executed directly

// module.exports = { generateEmbedding };