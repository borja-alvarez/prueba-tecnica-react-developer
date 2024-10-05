module.exports = [
    {
        files: ['src/**/*.{ts,tsx,js,jsx}'],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'module',
            parser: require('@typescript-eslint/parser'),
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                browser: true,
                jest: true,
            },
        },
        plugins: {
            react: require('eslint-plugin-react'),
            prettier: require('eslint-plugin-prettier'),
            '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
        },
        rules: {
            'prettier/prettier': ['error', { endOfLine: 'auto' }],
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            '@typescript-eslint/no-unused-vars': ['error'],
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
];