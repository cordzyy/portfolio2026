"use client";

import { User, Mail, Camera, Save } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="max-w-4xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">Profile</h1>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          Manage your personal information and preferences.
        </p>
      </div>

      <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 overflow-hidden">
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Avatar Section */}
          <div className="flex items-center space-x-6">
            <div className="relative">
              <div className="h-24 w-24 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center border-4 border-white dark:border-zinc-900 shadow-sm overflow-hidden">
                <User className="h-12 w-12 text-zinc-400" />
              </div>
              <button className="absolute bottom-0 right-0 rounded-full bg-violet-600 p-2 text-white shadow-sm hover:bg-violet-500 transition-colors">
                <Camera className="h-4 w-4" />
                <span className="sr-only">Change avatar</span>
              </button>
            </div>
            <div>
              <h3 className="text-lg font-medium text-zinc-900 dark:text-white">Admin User</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">admin@example.com</p>
              <p className="mt-1 text-xs text-zinc-400">JPG, GIF or PNG. Max size of 800K</p>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  First name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    defaultValue="Admin"
                    className="block w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-3 py-2 text-sm shadow-sm focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 dark:text-zinc-100"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Last name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    defaultValue="User"
                    className="block w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-3 py-2 text-sm shadow-sm focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 dark:text-zinc-100"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Email address
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-4 w-4 text-zinc-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    defaultValue="admin@example.com"
                    className="block w-full pl-10 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 py-2 text-sm shadow-sm focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 dark:text-zinc-100"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="bio" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Bio
                </label>
                <div className="mt-1">
                  <textarea
                    id="bio"
                    name="bio"
                    rows={3}
                    defaultValue="I manage things around here."
                    className="block w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-3 py-2 text-sm shadow-sm focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 dark:text-zinc-100"
                  />
                </div>
                <p className="mt-2 text-sm text-zinc-500">Brief description for your profile.</p>
              </div>
            </div>

            <div className="flex justify-end border-t border-zinc-200 dark:border-zinc-800 pt-6">
              <button
                type="button"
                className="rounded-md bg-white dark:bg-zinc-900 px-3 py-2 text-sm font-semibold text-zinc-900 dark:text-white shadow-sm ring-1 ring-inset ring-zinc-300 dark:ring-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors mr-3"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex justify-center rounded-md bg-violet-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 transition-colors"
                onClick={(e) => e.preventDefault()}
              >
                <Save className="-ml-0.5 mr-1.5 h-4 w-4" aria-hidden="true" />
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
