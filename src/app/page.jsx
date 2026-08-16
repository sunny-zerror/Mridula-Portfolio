import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import { createPageMetadata } from "@/lib/seo";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Projects />
    </>
  );
};

export default HomePage;

export async function generateMetadata() {
  return createPageMetadata("/");
}
