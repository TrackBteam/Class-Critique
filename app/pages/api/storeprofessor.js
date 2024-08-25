// pages/api/storeProfessor.js
import { storeProfessorData } from "../../lib/pineconeClient";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const professor = req.body;

    try {
      await storeProfessorData(professor);
      res.status(200).json({ message: "Professor data stored successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to store professor data" });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
