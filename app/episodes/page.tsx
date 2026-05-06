import { Metadata } from "next";
import { EpisodeGrid } from "@/components/episodes/episode-grid";
import { getAllEpisodes } from "@/lib/episodes";

export const metadata: Metadata = {
  title: "All Episodes - SuperPod",
  description:
    "Browse through all SuperPod episodes. Find your favorite topics and discover new content.",
};

export default function EpisodesPage() {
  const episodes = getAllEpisodes();

  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            All Episodes
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our complete collection of podcast episodes. Filter by
            topics and find exactly what you're looking for.
          </p>
        </div>

        <EpisodeGrid episodes={episodes} />
      </div>
    </main>
  );
}
