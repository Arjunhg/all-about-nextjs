const AboutPage = () => {
    return (
        <div className="space-y-8">
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-serif text-emerald-800">
                    Our Story
                </h1>
                <p className="text-emerald-600 max-w-2xl mx-auto">
                    Inspired by the magical worlds of Studio Ghibli, we created this space 
                    to share stories that inspire wonder and creativity in our daily lives.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/60 backdrop-blur-sm p-6 rounded-lg border border-emerald-100 hover:shadow-lg transition-all duration-300">
                    <h2 className="text-xl font-serif text-emerald-800 mb-3">Our Mission</h2>
                    <p className="text-emerald-600">
                        To create content that transports readers to magical worlds, 
                        just like the enchanting tales of Studio Ghibli. We believe in 
                        the power of storytelling to inspire, educate, and bring wonder 
                        to everyday life.
                    </p>
                </div>

                <div className="bg-white/60 backdrop-blur-sm p-6 rounded-lg border border-emerald-100 hover:shadow-lg transition-all duration-300">
                    <h2 className="text-xl font-serif text-emerald-800 mb-3">Our Values</h2>
                    <p className="text-emerald-600">
                        We value creativity, authenticity, and the magic of storytelling. 
                        Our content is crafted with care, attention to detail, and a deep 
                        appreciation for the natural world and human connection.
                    </p>
                </div>
            </div>

            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-lg border border-emerald-100 hover:shadow-lg transition-all duration-300">
                <h2 className="text-xl font-serif text-emerald-800 mb-3">Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4">
                        <div className="w-24 h-24 mx-auto rounded-full bg-emerald-100 flex items-center justify-center mb-2">
                            <span className="text-2xl">✧</span>
                        </div>
                        <h3 className="font-serif text-emerald-800">Storyteller</h3>
                        <p className="text-sm text-emerald-600">Crafting magical narratives</p>
                    </div>
                    <div className="text-center p-4">
                        <div className="w-24 h-24 mx-auto rounded-full bg-emerald-100 flex items-center justify-center mb-2">
                            <span className="text-2xl">✧</span>
                        </div>
                        <h3 className="font-serif text-emerald-800">Designer</h3>
                        <p className="text-sm text-emerald-600">Creating visual magic</p>
                    </div>
                    <div className="text-center p-4">
                        <div className="w-24 h-24 mx-auto rounded-full bg-emerald-100 flex items-center justify-center mb-2">
                            <span className="text-2xl">✧</span>
                        </div>
                        <h3 className="font-serif text-emerald-800">Explorer</h3>
                        <p className="text-sm text-emerald-600">Discovering new worlds</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
