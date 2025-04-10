import Link from "next/link";
import { games } from "../data/games";

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
      {/* Cyberpunk-style header with glowing text */}
      <div className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-pulse">
            EXPLORE GAMES
          </h1>
          <div className="mt-4 h-1 w-24 mx-auto bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full"></div>
          <p className="mt-6 text-xl text-cyan-300 max-w-3xl mx-auto">
            Discover the latest and greatest in gaming. From action-packed adventures to immersive RPGs.
          </p>
        </div>
      </div>

      {/* Game grid with cyberpunk styling */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <Link
              key={game.id}
              href={`/07.CatchAllRoutes/02.GamingWebsite/games/${game.category}/${game.slug}`}
              className="group relative bg-gray-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:border-cyan-400"
            >
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Game image with overlay */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                
                {/* Game title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h2 className="text-2xl font-bold text-white drop-shadow-[0_0_3px_rgba(0,0,0,0.8)]">
                    {game.title}
                  </h2>
                </div>
              </div>
              
              {/* Game info */}
              <div className="p-4 space-y-3">
                <p className="text-gray-300 text-sm line-clamp-2">{game.description}</p>
                
                {/* Rating with cyberpunk styling */}
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-cyan-400 font-bold">{game.rating}/10</span>
                </div>
                
                {/* Game category tag */}
                <div className="inline-block px-3 py-1 text-xs font-semibold text-cyan-300 bg-cyan-900/50 rounded-full border border-cyan-500/30">
                  {game.category.replace(/-/g, ' ').toUpperCase()}
                </div>
              </div>
              
              {/* Hover effect - "PLAY NOW" button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/70">
                <span className="px-6 py-2 text-lg font-bold text-white border-2 border-cyan-400 rounded-md bg-gradient-to-r from-cyan-600 to-purple-600 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                  PLAY NOW
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}