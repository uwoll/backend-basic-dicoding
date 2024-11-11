import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  // Use ESLint's recommended style
  pluginJs.configs.recommended,

  // Define custom rules for your project
  {
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      'linebreak-style': ['error', 'unix'], // Use LF linebreaks
      'no-console': 'off', // Disable no-console rule
      'quotes': ['error', 'single'], // Enforce single quotes
    },
  },
];
