const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyDiw97dJnUMnmqLZOHNx3QYIWx1ka6kzg0");



const funcall=async()=>{
   
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });
    
    const prompt = "Does Hemoglobin result is on normal range?";
    const imageUpload = {
        inlineData: {
        data: Buffer.from(fs.readFileSync("ExameSangue.jpg")).toString("base64"),
        mimeType: "image/jpg",
        },
    };
    
    const result = await model.generateContent([ prompt, imageUpload]);
    console.log(result.response.text());
}


funcall();
