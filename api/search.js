const axios = require("axios");

export default async function handler(req, res) {
    const { keyword } = req.query;

    if (!keyword) {
        return res.status(400).json({ error: "Keyword is required" });
    }

    try {
        const response = await axios.get(`https://hts.usitc.gov/reststop/search?keyword=${encodeURIComponent(keyword)}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data from HTS API" });
    }
}
