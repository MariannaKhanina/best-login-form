import js from '@eslint/js';
import ts from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';

export default ts.config(
    js.configs.recommended,
    ...ts.configs.recommended,
    ...svelte.configs['flat/recommended'],
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },
    {
        files: ['**/*.svelte'],
        languageOptions: {
            parserOptions: {
                parser: ts.parser,
            },
        },
        rules: {
            'svelte/indent': ['error', { indent: 4 }],
        },
    },
    {
        rules: {
            indent: ['error', 4],
            '@typescript-eslint/indent': ['error', 4],
        },
    },
    {
        ignores: ['build/', '.svelte-kit/', 'dist/', 'node_modules/'],
    }
);
