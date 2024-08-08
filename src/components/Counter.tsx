import { createClient } from "@/utils/supabase/client";
import { useState } from "react";
import { AnimatedCounter } from "react-animated-counter";

type CounterProps = {
  initialCount: number;
};

const Counter: React.FC<CounterProps> = ({ initialCount }) => {
  const supabase = createClient();
  const [count, setCount] = useState(initialCount);

  supabase
    .channel("regex-generations")
    .on(
      "postgres_changes",
      {
        event: "UPDATE",
        schema: "public",
        table: "regex_generations",
      },
      () => setCount((prev) => prev + 1)
    )
    .subscribe();

  return (
    <div className="flex flex-col gap-2 text-center mt-5">
      <p className="text-primary font-semibold">
        Regular expressions generated on this website so far
      </p>
      <AnimatedCounter
        value={count}
        color="white"
        fontSize="30px"
        includeCommas
        includeDecimals={false}
        incrementColor="#62baff"
      />
    </div>
  );
};

export default Counter;
