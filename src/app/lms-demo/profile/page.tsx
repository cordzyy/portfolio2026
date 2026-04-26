"use client";

import { useState } from "react";
import { User, Mail, Shield, Bell, Key, Download } from "lucide-react";
import { lmsUser } from "@/lib/lms-mock-data";

export default function LmsProfilePage() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight mb-8">Account Settings</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Tabs */}
          <div className="w-full md:w-64 flex-shrink-0">
            <nav className="space-y-1">
              <button 
                onClick={() => setActiveTab("profile")}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === "profile" 
                    ? "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400" 
                    : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-900"
                }`}
              >
                <User className="w-5 h-5" />
                Public Profile
              </button>
              <button 
                onClick={() => setActiveTab("account")}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === "account" 
                    ? "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400" 
                    : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-900"
                }`}
              >
                <Shield className="w-5 h-5" />
                Account Security
              </button>
              <button 
                onClick={() => setActiveTab("notifications")}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === "notifications" 
                    ? "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400" 
                    : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-900"
                }`}
              >
                <Bell className="w-5 h-5" />
                Notifications
              </button>
              <button 
                onClick={() => setActiveTab("certificates")}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === "certificates" 
                    ? "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400" 
                    : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-900"
                }`}
              >
                <Download className="w-5 h-5" />
                Certificates
              </button>
            </nav>
          </div>

          {/* Content Area */}
          <div className="flex-1">
            <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800 overflow-hidden">
              {activeTab === "profile" && (
                <div className="p-6 sm:p-10">
                  <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">Public Profile</h2>
                  
                  <div className="flex items-center gap-6 mb-8 pb-8 border-b border-zinc-200 dark:border-zinc-800">
                    <img src={lmsUser.avatar} alt={lmsUser.name} className="w-24 h-24 rounded-full border border-zinc-200 dark:border-zinc-700" />
                    <div>
                      <h3 className="font-medium text-zinc-900 dark:text-white">Profile Picture</h3>
                      <p className="text-sm text-zinc-500 mt-1 mb-3">JPG or PNG no larger than 5MB</p>
                      <button className="px-4 py-2 text-sm font-medium border border-zinc-300 dark:border-zinc-700 rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                        Upload new image
                      </button>
                    </div>
                  </div>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">First Name</label>
                        <input 
                          type="text" 
                          defaultValue="Joshua"
                          className="w-full px-4 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Last Name</label>
                        <input 
                          type="text" 
                          defaultValue="Student"
                          className="w-full px-4 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none transition-all"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Headline</label>
                      <input 
                        type="text" 
                        defaultValue="Front-End Developer Enthusiast"
                        className="w-full px-4 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none transition-all"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Biography</label>
                      <textarea 
                        rows={4}
                        defaultValue="I am passionate about building modern web applications and learning new technologies."
                        className="w-full px-4 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none transition-all"
                      ></textarea>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button type="button" className="px-6 py-2.5 bg-violet-600 text-white font-medium rounded-lg hover:bg-violet-500 transition-colors shadow-sm">
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              )}
              
              {activeTab === "account" && (
                <div className="p-6 sm:p-10">
                  <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">Account Security</h2>
                  <p className="text-zinc-500 dark:text-zinc-400 mb-8">Manage your email and password.</p>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-5 w-5 text-zinc-400" />
                        <input 
                          type="email" 
                          disabled
                          defaultValue={lmsUser.email}
                          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 text-zinc-500 cursor-not-allowed"
                        />
                      </div>
                    </div>
                    
                    <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
                      <h3 className="font-medium text-zinc-900 dark:text-white mb-4">Change Password</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Current Password</label>
                          <input type="password" placeholder="••••••••" className="w-full px-4 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 focus:ring-2 focus:ring-violet-500 outline-none" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">New Password</label>
                          <input type="password" placeholder="••••••••" className="w-full px-4 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 focus:ring-2 focus:ring-violet-500 outline-none" />
                        </div>
                        <button type="button" className="px-6 py-2.5 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-medium rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
                          Update Password
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {(activeTab === "notifications" || activeTab === "certificates") && (
                <div className="p-6 sm:p-10 flex flex-col items-center justify-center text-center min-h-[400px]">
                  <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-4">
                    {activeTab === "notifications" ? <Bell className="w-8 h-8 text-zinc-400" /> : <Download className="w-8 h-8 text-zinc-400" />}
                  </div>
                  <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                    {activeTab === "notifications" ? "Notification Preferences" : "Your Certificates"}
                  </h2>
                  <p className="text-zinc-500 dark:text-zinc-400 max-w-sm">
                    {activeTab === "notifications" 
                      ? "Control when and how you receive notifications from LearnHub." 
                      : "You haven't earned any certificates yet. Complete a course to earn one!"}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
