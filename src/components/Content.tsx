"use client";

import { generateRegex } from "@/app/actions";
import { readStreamableValue } from "ai/rsc";
import { FormEventHandler, useState } from "react";
import Counter from "./Counter";
import Form from "./Form";
import ResultCard from "./ResultCard";
import SuggestionsRow from "./SuggestionsRow";

type ContentProps = {
  initialCount: number;
};

const Content: React.FC<ContentProps> = ({ initialCount }) => {
  const [input, setInput] = useState<string>("");
  const [completion, setCompletion] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleRegexGeneration = async (value: string) => {
    if (!value || isLoading) return;
    setIsLoading(true);
    const result = await generateRegex(value);
    let newCompletion = "";
    for await (const content of readStreamableValue(result)) {
      newCompletion = content || newCompletion;
    }
    setCompletion(newCompletion);
    setIsLoading(false);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await handleRegexGeneration(input);
  };

  const handleSuggestionClick = async (text: string) => {
    setInput(text);
    await handleRegexGeneration(text);
  };

  return (
    <div className="flex flex-col w-full max-w-6xl gap-4">
      <Form
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
      />
      <ResultCard completion={completion || ""} isLoading={isLoading} />
      <SuggestionsRow handleSuggestionClick={handleSuggestionClick} />
      <Counter initialCount={initialCount} />
    </div>
  );
};

export default Content;
