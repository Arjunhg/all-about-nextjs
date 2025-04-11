import Link from "next/link";

const Blog = () => {
    const featuredPosts = [
        {
            id: 1,
            title: "The Magic of Studio Ghibli",
            excerpt: "Explore the enchanting world of Studio Ghibli and discover how their unique animation style has influenced artists and storytellers worldwide.",
            date: "June 15, 2024",
            category: "Animation",
            readTime: "5 min read"
        },
        {
            id: 2,
            title: "Finding Inspiration in Nature",
            excerpt: "Learn how the natural world can inspire your creative work, drawing parallels between Ghibli's environmental themes and your own projects.",
            date: "June 10, 2024",
            category: "Inspiration",
            readTime: "4 min read"
        },
        {
            id: 3,
            title: "The Art of Storytelling",
            excerpt: "Discover the storytelling techniques used by Studio Ghibli that make their films resonate with audiences of all ages.",
            date: "June 5, 2024",
            category: "Writing",
            readTime: "6 min read"
        },
        {
            id: 4,
            title: "Creating Magical Worlds",
            excerpt: "A deep dive into the world-building techniques that make Ghibli films so immersive and memorable.",
            date: "May 30, 2024",
            category: "Design",
            readTime: "7 min read"
        }
    ];

    return (
        <div className="space-y-8">
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-serif text-emerald-800">
                    Our Blog
                </h1>
                <p className="text-emerald-600 max-w-2xl mx-auto">
                    Explore our collection of articles inspired by the magical worlds of Studio Ghibli. 
                    Discover insights, tips, and stories that will transport you to new creative realms.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredPosts.map((post) => (
                    <Link 
                        href={`/08.Layout/02.Example/blog/${post.id}`} 
                        key={post.id}
                        className="group"
                    >
                        <div className="bg-white/60 backdrop-blur-sm p-6 rounded-lg border border-emerald-100 hover:shadow-lg transition-all duration-300 h-full">
                            <div className="flex justify-between items-start mb-3">
                                <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                                    {post.category}
                                </span>
                                <span className="text-xs text-emerald-500">
                                    {post.readTime}
                                </span>
                            </div>
                            
                            <h2 className="text-xl font-serif text-emerald-800 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                                {post.title}
                            </h2>
                            
                            <p className="text-emerald-600 mb-4">
                                {post.excerpt}
                            </p>
                            
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-emerald-500">
                                    {post.date}
                                </span>
                                <span className="text-emerald-700 font-medium group-hover:translate-x-1 transition-transform duration-300">
                                    Read more →
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="text-center mt-8">
                <Link 
                    href="/08.Layout/02.Example/blog/archive" 
                    className="inline-block px-6 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105"
                >
                    View All Posts
                </Link>
            </div>
        </div>
    );
};

export default Blog;