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
    if (!input) return;
    setIsLoading(true);
    const result = await generateRegex(input);
    for await (const content of readStreamableValue(result)) {
      setCompletion(content);
    }
    setIsLoading(false);
  };

  return (
    <main className="flex flex-col min-h-screen justify-center items-center gap-4 p-12">
      <div className="flex flex-col w-full max-w-3xl gap-4">
        <MainForm
          input={input}
          setInput={setInput}
          handleSubmit={handleSubmit}
        />
        <ResultCard completion={completion ?? ""} isLoading={isLoading} />
      </div>
    </main>
  );
};

export default Home;
