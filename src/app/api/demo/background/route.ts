import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { inngest } from "@/inngest/client";

// localhose:3000/api/demo/blocking

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY!,
});

export async function POST() {
  await inngest.send({
    name: "demo/generate",
    data: {},
  });

  return Response.json({
    status: "started",
  });
}
