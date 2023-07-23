import { CodegenConfig } from '@graphql-codegen/cli';
import { loadEnvConfig } from '@next/env';

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
  schema: `${process.env.ANILIST_URL}`,

  documents: ['src/**/*.ts?(x)'],

  generates: {
    './src/__generated__/': {
      preset: 'client',

      plugins: [],

      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },

  ignoreNoDocuments: true,
};

export default config;
