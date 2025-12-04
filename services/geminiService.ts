import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getFitnessAdvice = async (userQuery: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuery,
      config: {
        systemInstruction: `You are an AI assistant for Filip Levitsky, an elite Personal Trainer at PureGym London Aldgate. 
        Your tone should be motivational, professional, and concise. 
        Keep answers under 80 words.
        Focus on strength training, fat loss, and mindset for busy professionals.
        If the user asks about pricing or booking, strictly tell them to fill out the application form below.`,
      },
    });

    return response.text || "I'm training right now. Please try asking again in a moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Connection error. Please check your internet or try again later.";
  }
};