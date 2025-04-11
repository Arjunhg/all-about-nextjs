import Link from "next/link";
import { ReactNode } from "react";

const BlogLayout = ({ children, title = "Blog" }: { children: ReactNode, title?: string }) => {
    const recentPosts = [
        { id: 1, title: "The Magic of Studio Ghibli", date: "June 15, 2024" },
        { id: 2, title: "Finding Inspiration in Nature", date: "June 10, 2024" },
        { id: 3, title: "The Art of Storytelling", date: "June 5, 2024" },
        { id: 4, title: "Creating Magical Worlds", date: "May 30, 2024" },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-sky-50 to-emerald-50">
            <header className="sticky top-0 z-50 backdrop-blur-sm bg-white/70 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <span className="text-2xl font-serif text-emerald-800">
                                {title}
                            </span>
                        </div>
                        <nav className="flex space-x-8">
                            <Link 
                                href='/08.Layout/02.Example' 
                                className="text-emerald-700 hover:text-emerald-900 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-emerald-50"
                            >
                                Back to Home
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row gap-8">
                    <main className="flex-1 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-8 border border-emerald-100">
                        {children}
                    </main>

                    <aside className="w-full md:w-64 flex-shrink-0">
                        <div className="sticky top-24 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-6 border border-emerald-100">
                            <h2 className="text-lg font-serif text-emerald-800 mb-4 pb-2 border-b border-emerald-200">
                                Recent Posts
                            </h2>
                            <div className="space-y-4">
                                {recentPosts.map((post) => (
                                    <Link
                                        href={`/08.Layout/02.Example/blog/${post.id}`}
                                        key={post.id}
                                        className="block group"
                                    >
                                        <h3 className="text-sm font-medium text-emerald-700 group-hover:text-emerald-900 transition-colors duration-300">
                                            {post.title}
                                        </h3>
                                        <p className="text-xs text-emerald-500">
                                            {post.date}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default BlogLayout;