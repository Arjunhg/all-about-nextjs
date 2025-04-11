"use client";

import { useState } from "react";

const DashboardPage = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("week");

  const stats = [
    {
      label: "Total Posts",
      value: "156",
      change: "+12%",
      trend: "up",
      icon: "📝"
    },
    {
      label: "Active Users",
      value: "2,847",
      change: "+5%",
      trend: "up",
      icon: "👥"
    },
    {
      label: "Engagement Rate",
      value: "68%",
      change: "+3%",
      trend: "up",
      icon: "💫"
    },
    {
      label: "Avg. Time on Site",
      value: "5m 23s",
      change: "+8%",
      trend: "up",
      icon: "⏱️"
    }
  ];

  const recentActivity = [
    {
      type: "post",
      title: "The Magic of Studio Ghibli",
      user: "Sarah",
      time: "2 hours ago",
      icon: "📝"
    },
    {
      type: "comment",
      title: "New comment on 'Finding Inspiration in Nature'",
      user: "Mike",
      time: "4 hours ago",
      icon: "💭"
    },
    {
      type: "user",
      title: "New user registration",
      user: "Emma",
      time: "6 hours ago",
      icon: "👤"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-serif text-emerald-800">
          Welcome Back, Admin
        </h1>
        <select
          value={selectedPeriod}
          onChange={(e) => setSelectedPeriod(e.target.value)}
          className="px-4 py-2 border border-emerald-200 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
        >
          <option value="day">Today</option>
          <option value="week">This Week</option>
          <option value="month">This Month</option>
          <option value="year">This Year</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white/60 backdrop-blur-sm p-6 rounded-lg border border-emerald-100 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl">{stat.icon}</span>
              <span className={`text-sm font-medium ${
                stat.trend === "up" ? "text-emerald-600" : "text-red-600"
              }`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-sm font-medium text-emerald-600">{stat.label}</h3>
            <p className="text-2xl font-serif text-emerald-800">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white/60 backdrop-blur-sm rounded-lg border border-emerald-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-emerald-100">
          <h2 className="text-xl font-serif text-emerald-800">Recent Activity</h2>
        </div>
        <div className="divide-y divide-emerald-100">
          {recentActivity.map((activity, index) => (
            <div key={index} className="px-6 py-4 hover:bg-emerald-50 transition-colors duration-300">
              <div className="flex items-center">
                <span className="text-xl mr-3">{activity.icon}</span>
                <div className="flex-1">
                  <p className="text-emerald-800 font-medium">
                    {activity.title}
                  </p>
                  <p className="text-sm text-emerald-600">
                    by {activity.user} • {activity.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/60 backdrop-blur-sm p-6 rounded-lg border border-emerald-100">
          <h2 className="text-xl font-serif text-emerald-800 mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <button className="w-full px-4 py-3 text-left text-emerald-700 hover:bg-emerald-50 rounded-md transition-all duration-300 flex items-center">
              <span className="text-xl mr-3">✨</span>
              Create New Post
            </button>
            <button className="w-full px-4 py-3 text-left text-emerald-700 hover:bg-emerald-50 rounded-md transition-all duration-300 flex items-center">
              <span className="text-xl mr-3">👥</span>
              Manage Users
            </button>
            <button className="w-full px-4 py-3 text-left text-emerald-700 hover:bg-emerald-50 rounded-md transition-all duration-300 flex items-center">
              <span className="text-xl mr-3">⚙️</span>
              Site Settings
            </button>
          </div>
        </div>

        <div className="bg-white/60 backdrop-blur-sm p-6 rounded-lg border border-emerald-100">
          <h2 className="text-xl font-serif text-emerald-800 mb-4">System Status</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm text-emerald-700 mb-1">
                <span>Server Load</span>
                <span>28%</span>
              </div>
              <div className="h-2 bg-emerald-100 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: "28%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm text-emerald-700 mb-1">
                <span>Storage Usage</span>
                <span>45%</span>
              </div>
              <div className="h-2 bg-emerald-100 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: "45%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm text-emerald-700 mb-1">
                <span>Memory Usage</span>
                <span>62%</span>
              </div>
              <div className="h-2 bg-emerald-100 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: "62%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;