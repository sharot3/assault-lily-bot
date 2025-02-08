import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import typeScriptEslint from '@typescript-eslint/eslint-plugin';
import typeScriptEslintParser from '@typescript-eslint/parser';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default tseslint.config(
  {
    ignores: ['dist/**', '.prettierrc.js'],
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  // tseslint.configs.recommendedTypeChecked,
  {
    plugins: {
      typeScriptEslint,
    },
    languageOptions: {
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
      parser: typeScriptEslintParser,
      parserOptions: {
        sourceType: 'module',
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      '@typescript-eslint/no-var-requires': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      'no-irregular-whitespace': 'error',
      'prefer-const': 'error',
      'no-duplicate-case': 'error',
      eqeqeq: 'error',
    },
  },
  eslintConfigPrettier,
);
