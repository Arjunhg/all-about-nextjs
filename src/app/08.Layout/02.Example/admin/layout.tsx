import Link from "next/link";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const menuItems = [
    { href: "/08.Layout/02.Example/admin/dashboard", label: "Dashboard", icon: "📊" },
    { href: "/08.Layout/02.Example/admin/users", label: "Users", icon: "👥" },
    { href: "/08.Layout/02.Example/admin/posts", label: "Posts", icon: "📝" },
    { href: "/08.Layout/02.Example/admin/settings", label: "Settings", icon: "⚙️" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-teal-50">
      <header className="sticky top-0 z-50 backdrop-blur-sm bg-white/70 shadow-sm border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-serif text-emerald-800">
                ✧ Admin Panel ✧
              </span>
            </div>
            <nav className="flex space-x-4">
              <Link
                href="/08.Layout/02.Example"
                className="text-emerald-700 hover:text-emerald-900 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-emerald-50"
              >
                Back to Site
              </Link>
              <button className="text-emerald-700 hover:text-emerald-900 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-emerald-50">
                Sign Out
              </button>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-64 flex-shrink-0">
            <div className="sticky top-24 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-6 border border-emerald-100">
              <nav className="space-y-1">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center px-4 py-3 text-emerald-700 hover:bg-emerald-50 rounded-md transition-all duration-300 group"
                  >
                    <span className="mr-3 text-lg group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          <main className="flex-1 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-8 border border-emerald-100">
            {children}
          </main>
        </div>
      </div>

      <footer className="mt-auto bg-white/70 backdrop-blur-sm border-t border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-emerald-700">
            <p className="text-sm">
              ✧ Admin Panel • {new Date().getFullYear()} ✧
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AdminLayout;