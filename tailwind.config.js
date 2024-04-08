/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-image":
          "url('https://assets-global.website-files.com/5dcc7f8c449e597ed83356b8/62f2d4b8eafac549c059e553_hero-min.webp')",
        "award-image-1":
          "url('https://assets-global.website-files.com/5dcc7f8c449e597ed83356b8/63bdd0cb4931c11c9329c4d3_CourseReportBadge-2023.webp')",
        "award-image-2":
          "url('https://assets-global.website-files.com/5dcc7f8c449e597ed83356b8/647660d5c9b4aae9b0cbaf98_CareerKarmaBadge-2023.webp')",
        "award-image-3":
          "url('https://assets-global.website-files.com/5dcc7f8c449e597ed83356b8/647660d6f546d8bc8ce96e0e_SwitchUpBadge-2023.webp')",
      },
    },
  },
  plugins: [],
};
