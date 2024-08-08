import Content from "@/components/Content";
import Headline from "@/components/Headline";
import { createClient } from "@/utils/supabase/server";
import Image from "next/image";

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
      <Headline />
      <Content initialCount={data?.count ?? 0} />
      <a
        href="https://www.producthunt.com/posts/regexbot?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-regexbot"
        target="_blank"
        rel="noreferrer"
        className="fixed top-10 z-50"
      >
        <Image
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=478062&theme=light"
          alt="RegexBot - Easily&#0032;convert&#0032;natural&#0032;language&#0032;to&#0032;RegEx&#0032;using&#0032;AI | Product Hunt"
          width="250"
          height="54"
        />
      </a>
    </main>
  );
};

export default Home;
