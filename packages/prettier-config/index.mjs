/** @type {import("prettier").Config} */
const config = {
  importOrder: ["<THIRD_PARTY_MODULES>", "^@webbun/(.*)$", "^@/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
};

export default config;
