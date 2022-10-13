
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql",
  documents: "src/**/*.tsx",
  generates: {
    "src/gql": {
      preset: "client",
      plugins: []
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
