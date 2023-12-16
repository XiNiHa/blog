/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [
    "plugin:@typescript-eslint/recommended",
    "@unocss",
    "plugin:astro/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },
  ],
};
