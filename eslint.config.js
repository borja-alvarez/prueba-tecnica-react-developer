module.exports = [
    {
        files: ['src/**/*.{js,jsx}'],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'module',
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
        },
        rules: {
            'prettier/prettier': ['error', { endOfLine: 'auto' }],
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
];