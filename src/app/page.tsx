import Content from "@/components/Content";
import HeroSection from "@/components/HeroSection";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => (
  <main className="flex flex-col min-h-screen justify-evenly items-center gap-4 p-12">
    <HeroSection />
    <Content />
  </main>
);

export default Home;
