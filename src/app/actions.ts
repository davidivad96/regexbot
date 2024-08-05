"use server";

import { SYSTEM_PROMPT } from "@/constants";
import { google } from "@ai-sdk/google";
import { streamText } from "ai";
import { createStreamableValue } from "ai/rsc";

export const generateRegex = async (prompt: string) => {
  const { textStream } = await streamText({
    model: google("models/gemini-1.5-pro-latest"),
    prompt,
    system: SYSTEM_PROMPT,
  });
  const stream = createStreamableValue(textStream);
  return stream.value;
};
