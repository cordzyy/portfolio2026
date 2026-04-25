# portfolio2026 – Setup Script
# Run this from D:\VS Code\portfolio2026

# Step 1: Initialize Next.js project (KEEP your existing files)
npx create-next-app@latest . --typescript --tailwind --eslint --src-dir --app --import-alias "@/*" --yes

# Step 2: Init shadcn with zinc theme and default settings
npx shadcn@latest init -d

# Step 3: Install Framer Motion + additional shadcn deps
npm install framer-motion

# Step 4: (Optional) Add extra shadcn components you may use later
# npx shadcn@latest add button card dialog sheet

# Step 5: Start dev server
npm run dev
