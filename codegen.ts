import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://gql.hashnode.com/",
  documents: "src/**/*.{ts,tsx,astro}",
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [],
      config: {
        useTypeImports: true,
        dedupeFragments: true,
        enumsAsTypes: true,
        skipTypename: true,
      },
    },
  },
};

export default config;
