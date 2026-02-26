import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

export const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export async function analyzeLaundryOrder(description: string) {
  if (!ai) return null;
  
  const model = ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Analyze this laundry order description and return a JSON object with items and estimated weights: ${description}`,
  });
  
  return model;
}
