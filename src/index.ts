import dotenv from "dotenv";
import express from "express";
import { Configuration, OpenAIApi } from "openai";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 4000;

const configuration = new Configuration({
  organization: "org-ZUp3jGxTmmLO4VbroP9N1UIw",
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

// creating the server
app.get("/", (req, res) => {
  res.json({ message: "All services active." });
});

app.get("/api/models", async (req, res) => {
  const response = await openai.listEngines();
  res.json({
    models: response.data.data,
  });
});

app.post("/api", async (req, res) => {
  const { message, currentModel } = req.body;

  const response = await openai.createCompletion({
    model: currentModel,
    prompt: `${message}`,
    max_tokens: 100,
    temperature: 0.5,
  });

  res.json({
    message: response.data.choices[0].text,
  });
});

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
