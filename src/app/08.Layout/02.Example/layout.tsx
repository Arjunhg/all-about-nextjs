import Link from "next/link";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
    const categories = [
        { name: 'Technology', href: '#' },
        { name: 'Design', href: '#' },
        { name: 'Business', href: '#' },
        { name: 'Science', href: '#' },
        { name: 'Health', href: '#' },
        { name: 'Travel', href: '#' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-sky-50 to-emerald-50">
            {/* Header */}
            <header className="sticky top-0 z-50 backdrop-blur-sm bg-white/70 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <span className="text-2xl font-serif text-emerald-800 hover:text-emerald-600 transition-colors duration-300">
                                ✧ Ghibli Blog ✧
                            </span>
                        </div>
                        <nav className="flex space-x-8">
                            <Link 
                                href='/08.Layout/02.Example' 
                                className="text-emerald-700 hover:text-emerald-900 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-emerald-50"
                            >
                                Home
                            </Link>
                            <Link 
                                href='/08.Layout/02.Example/about' 
                                className="text-emerald-700 hover:text-emerald-900 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-emerald-50"
                            >
                                About
                            </Link>
                            <Link 
                                href='/08.Layout/02.Example/contact' 
                                className="text-emerald-700 hover:text-emerald-900 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-emerald-50"
                            >
                                Contact
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>

            <div className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Sidebar */}
                <aside className="w-64 flex-shrink-0 mr-8">
                    <div className="sticky top-24 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-6 border border-emerald-100">
                        <h2 className="text-lg font-serif text-emerald-800 mb-4 pb-2 border-b border-emerald-200">
                            Categories
                        </h2>
                        <div className="space-y-2">
                            {categories.map((category, i) => (
                                <Link
                                    href={category.href}
                                    key={i}
                                    className="block px-4 py-2 text-sm text-emerald-700 hover:bg-emerald-50 rounded-md transition-all duration-300 hover:translate-x-1"
                                >
                                    {category.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-8 border border-emerald-100">
                    {children}
                </main>
            </div>

            {/* Footer */}
            <footer className="mt-auto bg-white/70 backdrop-blur-sm border-t border-emerald-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="text-center text-emerald-700">
                        <p className="text-sm">
                            ✧ Copyright © 2024 Ghibli Blog - All rights reserved ✧
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
