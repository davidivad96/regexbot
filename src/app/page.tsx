import Content from "@/components/Content";
import HeroSection from "@/components/HeroSection";
import { createClient } from "@/utils/supabase";

type HomeProps = {};

const Home: React.FC<HomeProps> = async () => {
  const supabase = createClient();

  const { data } = await supabase
    .from("regex_generations")
    .select("count")
    .limit(1)
    .single();

  return (
    <main className="flex flex-col flex-1 justify-around items-center gap-4 p-12">
      <HeroSection />
      <Content initialCount={data?.count ?? 0} />
    </main>
  );
};

export default Home;
