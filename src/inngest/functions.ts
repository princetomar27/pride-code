import { generateText } from "ai";
import { inngest } from "./client";
import { createGoogleGenerativeAI } from "@ai-sdk/google";

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY!,
});

const response = await generateText({
  model: google("gemini-2.5-flash"),
  prompt: "Write a vegetarian lasagna recipe for 4 people.",
});

export const demoGenerateText = inngest.createFunction(
  { id: "demo-generate-text" },
  { event: "demo/generate-text" },
  async ({ step }) => {
    await step.run("generate-text", async () => {
      return await generateText({
        model: google("gemini-2.5-flash"),
        prompt: "Write a vegetarian lasagna recipe for 4 people.",
      });
    });
  }
);
