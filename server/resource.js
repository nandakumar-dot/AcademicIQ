const express = require("express");
const router = express.Router();
const axios = require("axios");


// Load API keys from environment variables
const YOUTUBE_API_KEY = 'AIzaSyCm8Qr9QkH01F5669tYBOMvGqJnZ-GDiko';
const GOOGLE_SEARCH_API_KEY = 'AIzaSyCsw3G9MT0i3n6JyGaWzsSa-CYlj3V8B6A';
const GOOGLE_CSE_ID = 'a768cce1b82d641d8';
// const OREILLY_API_KEY = process.env.OREILLY_API_KEY;

/** 
 * Fetch YouTube videos 
 */
async function fetchYouTubeVideos(query) {
    try {
        const { data } = await axios.get("https://www.googleapis.com/youtube/v3/search", {
            params: {
                key: YOUTUBE_API_KEY,
                q: query,
                part: "snippet",
                type: "video",
                maxResults: 5,
            },
        });

        return data.items.map((item) => ({
            title: item.snippet.title,
            videoId: item.id.videoId,
            url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
            thumbnail: item.snippet.thumbnails.high.url,
        }));
    } catch (error) {
        console.error("Error fetching YouTube videos:", error);
        return [];
    }
}

/** 
 * Fetch Google Search results 
 */
async function fetchWebResources(query) {
    try {
        const { data } = await axios.get("https://www.googleapis.com/customsearch/v1", {
            params: {
                key: GOOGLE_SEARCH_API_KEY,
                cx: GOOGLE_CSE_ID,
                q: query,
                num: 5,
            },
        });

        return data.items ? data.items.map((item) => ({
            title: item.title,
            link: item.link,
            snippet: item.snippet,
        })) : [];
    } catch (error) {
        console.error("Error fetching web resources:", error);
        return [];
    }
}

/** 
 * Fetch O'Reilly book recommendations 
 */
async function fetchBooks(query) {
    try {
        const { data } = await axios.get(`https://learning.oreilly.com/api/v2/search/`, {
            params: { query }
        });

        return data.results ? data.results.map((book) => ({
            title: book.title,
            authors: book.authors ? book.authors.join(", ") : "Unknown Author",
            url: book.url,
            cover: book.cover || null,
        })) : [];
    } catch (error) {
        console.error("Error fetching books:", error);
        return [];
    }
}


/** 
 * Unified API to get all resources 
 */
router.get("/", async (req, res) => {
    const searchQuery = req.query.q;
    if (!searchQuery) return res.status(400).json({ error: "Query is required" });

    try {
        // Fetch all three types of resources in parallel
        const [videos, webResources, books] = await Promise.all([
            fetchYouTubeVideos(searchQuery),
            fetchWebResources(searchQuery),
            fetchBooks(searchQuery),
        ]);

        res.json({ videos, webResources, books });
    } catch (error) {
        console.error("Error fetching resources:", error);
        res.status(500).json({ error: "Failed to fetch resources" });
    }
});


module.exports = router