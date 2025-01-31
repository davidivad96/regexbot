type HeadlineProps = {};

const Headline: React.FC<HeadlineProps> = () => (
  <div className="flex flex-col gap-4">
    <h1 className="text-5xl font-bold text-center leading-snug">
      Convert <span className="text-primary">natural language</span> into{" "}
      <span className="text-primary">Powerful RegEx</span> Effortlessly
    </h1>
    <span className="text-xl text-center">
      Unlock the Power of AI to Master Regular Expressions
    </span>
  </div>
);

export default Headline;
