import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;

// 📸 Fetch Photos (Unsplash)
export async function fetchPhotos(query, page = 1, per_page = 20) {
  try {
    if (!query) return [];

    const res = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query, page, per_page },
      headers: {
        Authorization: `Client-ID ${UNSPLASH_KEY}`
      }
    });

    return res.data.results;

  } catch (error) {
    console.error("Error fetching photos:", error);
    return [];
  }
}

// 🎥 Fetch Videos (Pexels)
export async function fetchVideos(query, per_page = 15) {
  try {
    if (!query) return [];

    const res = await axios.get("https://api.pexels.com/videos/search", {
      params: { query, per_page },
      headers: {
        Authorization: PEXELS_KEY 
      }
    });

    return res.data.videos; 

  } catch (error) {
    console.error("Error fetching videos:", error);
    return [];
  }
}
