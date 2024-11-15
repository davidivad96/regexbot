"use server";

import { SYSTEM_PROMPT } from "@/utils/constants";
import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { createStreamableValue } from "ai/rsc";

export const generateRegex = async (prompt: string) => {
  const { textStream } = await streamText({
    model: openai("gpt-4o-mini"),
    prompt,
    system: SYSTEM_PROMPT,
  });
  const stream = createStreamableValue(textStream);
  return stream.value;
};
