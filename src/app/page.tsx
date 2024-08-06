"use client";

import MainForm from "@/components/MainForm";
import ResultCard from "@/components/ResultCard";
import { readStreamableValue } from "ai/rsc";
import { FormEventHandler, useState } from "react";
import { generateRegex } from "./actions";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  const [input, setInput] = useState<string>("");
  const [completion, setCompletion] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!input || isLoading) return;
    setIsLoading(true);
    const result = await generateRegex(input);
    let newCompletion = "";
    for await (const content of readStreamableValue(result)) {
      newCompletion = content || newCompletion;
    }
    setCompletion(newCompletion);
    setIsLoading(false);
  };

  return (
    <main className="flex flex-col min-h-screen justify-evenly items-center gap-4 p-12">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold text-center">
          Convert <span className="text-primary">Plain English</span> into{" "}
          <span className="text-primary">Powerful RegEx</span> Effortlessly
        </h1>
        <p className="text-lg text-center">
          Unlock the Power of AI to Master Regular Expressions
        </p>
      </div>
      <div className="flex flex-col w-full max-w-6xl gap-4">
        <MainForm
          input={input}
          setInput={setInput}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
        />
        <ResultCard completion={completion ?? ""} isLoading={isLoading} />
      </div>
    </main>
  );
};

export default Home;
