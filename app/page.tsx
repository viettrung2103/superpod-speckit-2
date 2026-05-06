import { HeroSection } from "@/components/sections/hero-section";
import { RecentEpisodes } from "@/components/sections/recent-episodes";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <RecentEpisodes />
    </main>
  );
}
