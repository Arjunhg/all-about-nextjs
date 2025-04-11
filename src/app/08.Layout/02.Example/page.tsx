const Home = () => {
    return (
        <div className="space-y-8">
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-serif text-emerald-800">
                    Welcome to Our Magical World
                </h1>
                <p className="text-emerald-600 max-w-2xl mx-auto">
                    Discover stories that inspire, educate, and transport you to new worlds. 
                    Just like Studio Ghibli's enchanting tales, our content aims to bring magic 
                    and wonder to your everyday life.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/60 backdrop-blur-sm p-6 rounded-lg border border-emerald-100 hover:shadow-lg transition-all duration-300">
                    <h2 className="text-xl font-serif text-emerald-800 mb-3">Latest Stories</h2>
                    <p className="text-emerald-600">
                        Explore our most recent articles and discover new perspectives on technology, 
                        design, and business.
                    </p>
                </div>

                <div className="bg-white/60 backdrop-blur-sm p-6 rounded-lg border border-emerald-100 hover:shadow-lg transition-all duration-300">
                    <h2 className="text-xl font-serif text-emerald-800 mb-3">Featured Content</h2>
                    <p className="text-emerald-600">
                        Dive into our carefully curated selection of stories that inspire creativity 
                        and innovation.
                    </p>
                </div>
            </div>

            <div className="text-center">
                <button className="px-6 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105">
                    Start Exploring
                </button>
            </div>
        </div>
    );
};

export default Home;
