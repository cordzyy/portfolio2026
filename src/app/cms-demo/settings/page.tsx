"use client";

import { Save } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="max-w-4xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">Settings</h1>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          Manage your system preferences and website configuration.
        </p>
      </div>

      <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 overflow-hidden">
        <div className="p-6 sm:p-8">
          <form className="space-y-8">
            
            {/* General Settings */}
            <div>
              <h2 className="text-base font-semibold leading-7 text-zinc-900 dark:text-white">General</h2>
              <p className="mt-1 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                Update your site's main information.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6 border-b border-zinc-200 dark:border-zinc-800 pb-8">
                <div className="sm:col-span-4">
                  <label htmlFor="site-name" className="block text-sm font-medium leading-6 text-zinc-900 dark:text-zinc-100">
                    Site Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="site-name"
                      id="site-name"
                      defaultValue="My Awesome Website"
                      className="block w-full rounded-md border-0 py-1.5 px-3 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6 dark:bg-zinc-950 dark:text-white dark:ring-zinc-700"
                    />
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label htmlFor="site-description" className="block text-sm font-medium leading-6 text-zinc-900 dark:text-zinc-100">
                    Site Description
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="site-description"
                      name="site-description"
                      rows={3}
                      defaultValue="A modern portfolio and blog built with Next.js."
                      className="block w-full rounded-md border-0 py-1.5 px-3 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6 dark:bg-zinc-950 dark:text-white dark:ring-zinc-700"
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-zinc-500 dark:text-zinc-400">Used for SEO and meta descriptions.</p>
                </div>
              </div>
            </div>

            {/* Preferences */}
            <div>
              <h2 className="text-base font-semibold leading-7 text-zinc-900 dark:text-white">Preferences</h2>
              <p className="mt-1 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                Customize how the CMS looks and feels.
              </p>

              <div className="mt-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium leading-6 text-zinc-900 dark:text-zinc-100">Dark Mode</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Force dark mode for the admin interface.</p>
                  </div>
                  <button
                    type="button"
                    className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-violet-600 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2"
                    role="switch"
                    aria-checked="true"
                  >
                    <span
                      aria-hidden="true"
                      className="pointer-events-none inline-block h-5 w-5 translate-x-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium leading-6 text-zinc-900 dark:text-zinc-100">Email Notifications</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Receive email alerts for new user registrations.</p>
                  </div>
                  <button
                    type="button"
                    className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-zinc-200 dark:bg-zinc-700 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2"
                    role="switch"
                    aria-checked="false"
                  >
                    <span
                      aria-hidden="true"
                      className="pointer-events-none inline-block h-5 w-5 translate-x-0 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                    />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-6">
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
                Save Preferences
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
