import { PineconeClient } from "@pinecone-database/client";

// Initialize Pinecone Client
const pinecone = new PineconeClient();
await pinecone.init({
  environment: "us-west1-gcp", // Replace with your Pinecone environment
  apiKey: process.env.PINECONE_API_KEY,
});

// Create or access an index for storing professor data
const index = pinecone.Index("professor-data");

// Function to create and store vector embeddings using Gemini API
export const storeProfessorData = async (professor) => {
  const { id, name, rating, review } = professor;
  const data = `${name}, Rating: ${rating}, Review: ${review}`;

  // Convert data into vector embedding using Gemini API
  const embeddingResponse = await fetch(
    "https://gemini-api.yourservice.com/embedding",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GEMINI_API_KEY}`,
      },
      body: JSON.stringify({ input: data }),
    }
  );

  const responseData = await embeddingResponse.json();
  const vector = responseData.embedding;

  // Save the embedding in Pinecone
  await index.upsert({
    vectors: [{ id: id, values: vector }],
  });
};

// Function to query Pinecone for similar professors using Gemini API
export const queryProfessorData = async (query) => {
  // Convert the query into vector embedding using Gemini API
  const embeddingResponse = await fetch(
    "https://gemini-api.yourservice.com/embedding",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GEMINI_API_KEY}`,
      },
      body: JSON.stringify({ input: query }),
    }
  );

  const responseData = await embeddingResponse.json();
  const queryVector = responseData.embedding;

  // Query Pinecone for similar professor data
  const result = await index.query({
    topK: 5,
    vector: queryVector,
  });

  return result.matches;
};
