type HeadlineProps = {};

const Headline: React.FC<HeadlineProps> = () => (
  <div className="flex flex-col gap-6">
    <h1 className="text-5xl font-bold text-center leading-snug">
      Convert <span className="text-primary">Plain English</span> into{" "}
      <span className="text-primary">Powerful RegEx</span> Effortlessly
    </h1>
    <p className="text-xl text-center">
      Unlock the Power of AI to Master Regular Expressions
    </p>
  </div>
);

export default Headline;
