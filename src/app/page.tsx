import Content from "@/components/Content";
import HeroSection from "@/components/HeroSection";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => (
  <main className="flex flex-col flex-1 justify-evenly items-center gap-4 p-12">
    <HeroSection />
    <Content />
  </main>
);

export default Home;
