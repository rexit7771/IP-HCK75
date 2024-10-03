require('dotenv').config()
const { GoogleGenerativeAI } = require("@google/generative-ai");

const gemini = async (data, genre) => {
    // Make sure to include these imports:
    // import { GoogleGenerativeAI } from "@google/generative-ai";
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_AI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const Base_URL = `https://api.rawg.io/api/games?key=${process.env.API_KEY_RAWG}`

    const prompt = `this variabel ${Base_URL} is a url to get much data about games. Can you give me 5 recommendation but the genre is ${genre}`;

    const result = await model.generateContent(prompt);
    // console.log();
    return result.response.text()
}

module.exports = gemini