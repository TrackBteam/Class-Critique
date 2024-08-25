// pages/api/geminiHandler.js
import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { query } = req.body;

    try {
      // Replace with the actual Gemini API endpoint and parameters
      const response = await axios.post(
        "https://gemini-api.example.com/v1/queries", // Example endpoint, replace with actual
        {
          prompt: query,
          // Add any other necessary parameters for the Gemini API
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_GEMINI_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;
      res.status(200).json({ result: data });
    } catch (error) {
      console.error("Error querying Gemini API:", error);
      res
        .status(500)
        .json({ error: "Failed to retrieve data from Gemini API" });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
