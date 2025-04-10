import { games } from "../../data/games";
import { FaGamepad, FaCalendarAlt, FaDesktop, FaStar, FaUsers, FaGlobe, FaTrophy, FaClock } from "react-icons/fa";
import Link from "next/link";

const GamePage = async ({ params }: { params: { slug: string[] } }) => {
  const { slug } = await params;

  const [category, gameSlug] = slug;
  const game = games.find(
    (game) => game.category === category && game.slug === gameSlug
  );

  if (!game) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center">
        <div className="text-center p-8 bg-gray-900/80 backdrop-blur-sm border border-red-500/30 rounded-lg">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-500 mb-4">
            GAME NOT FOUND
          </h1>
          <p className="text-gray-300 mb-6">The game you're looking for doesn't exist in our database.</p>
          <Link 
            href="/07.CatchAllRoutes/02.GamingWebsite/games" 
            className="px-6 py-2 text-lg font-bold text-white border-2 border-cyan-400 rounded-md bg-gradient-to-r from-cyan-600 to-purple-600 shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:shadow-[0_0_25px_rgba(6,182,212,0.7)] transition-all duration-300"
          >
            RETURN TO GAMES
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
      {/* Hero section with parallax-like effect */}
      <div className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={game.image}
            alt={game.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
        </div>
        
        {/* Game title and rating overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between">
              <div>
                <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-[0_0_5px_rgba(0,0,0,0.8)]">
                  {game.title}
                </h1>
                <div className="mt-2 flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-xl text-cyan-400 font-bold">{game.rating}/10</span>
                </div>
              </div>
              
              {/* Play button */}
              <div className="mt-4 md:mt-0">
                <button className="px-8 py-3 text-lg font-bold text-white border-2 border-cyan-400 rounded-md bg-gradient-to-r from-cyan-600 to-purple-600 shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:shadow-[0_0_25px_rgba(6,182,212,0.7)] transition-all duration-300 transform hover:scale-105">
                  PLAY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Game details section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Game description */}
            <div className="bg-gray-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
                ABOUT THIS GAME
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {game.description}
              </p>
            </div>
            
            {/* Game features */}
            <div className="bg-gray-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
                GAME FEATURES
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="text-cyan-400 mt-1">
                    <FaTrophy className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Difficulty</h3>
                    <p className="text-gray-300">{game.difficulty}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-cyan-400 mt-1">
                    <FaUsers className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Multiplayer</h3>
                    <p className="text-gray-300">{game.multiplayer ? "Available" : "Single Player Only"}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-cyan-400 mt-1">
                    <FaGlobe className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Setting</h3>
                    <p className="text-gray-300">{game.setting}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-cyan-400 mt-1">
                    <FaClock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Progression</h3>
                    <p className="text-gray-300">{game.progressionSystem}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar with game info */}
          <div className="space-y-6">
            {/* Game info cards */}
            <div className="bg-gray-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
                GAME INFO
              </h2>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                  <FaCalendarAlt className="text-cyan-400 mr-3" />
                  <div>
                    <p className="text-gray-400 text-sm">Release Date</p>
                    <p className="text-white font-medium">{game.releaseDate}</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                  <FaGamepad className="text-cyan-400 mr-3" />
                  <div>
                    <p className="text-gray-400 text-sm">Developer</p>
                    <p className="text-white font-medium">{game.developer}</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                  <FaDesktop className="text-cyan-400 mr-3" />
                  <div>
                    <p className="text-gray-400 text-sm">Platforms</p>
                    <p className="text-white font-medium">{game.platforms.join(", ")}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Back to games button */}
            <Link 
              href="/07.CatchAllRoutes/02.GamingWebsite/games" 
              className="block w-full text-center px-6 py-3 text-lg font-bold text-white border-2 border-cyan-400 rounded-md bg-gradient-to-r from-cyan-600 to-purple-600 shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:shadow-[0_0_25px_rgba(6,182,212,0.7)] transition-all duration-300"
            >
              BACK TO GAMES
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GamePage;
