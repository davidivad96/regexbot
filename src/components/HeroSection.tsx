type HeroSectionProps = {};

const HeroSection: React.FC<HeroSectionProps> = () => (
  <div className="flex flex-col gap-2">
    <h1 className="text-4xl font-bold text-center">
      Convert <span className="text-primary">Plain English</span> into{" "}
      <span className="text-primary">Powerful RegEx</span> Effortlessly
    </h1>
    <p className="text-lg text-center">
      Unlock the Power of AI to Master Regular Expressions
    </p>
  </div>
);

export default HeroSection;
