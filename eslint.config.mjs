import path from 'node:path';
import { includeIgnoreFile } from '@eslint/compat';
import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import { configs, plugins, rules } from 'eslint-config-airbnb-extended';
import eslintComments from 'eslint-plugin-eslint-comments';
import importPlugin from 'eslint-plugin-import';
import noJquery from 'eslint-plugin-no-jquery';

const gitignorePath = path.resolve('.', '.gitignore');

const jsConfig = defineConfig([
    {
        name: 'js/config',
        ...js.configs.recommended,
    },
    plugins.stylistic,
    plugins.importX,
    ...configs.base.recommended,
    rules.base.importsStrict,
]);

const nextConfig = defineConfig([
    plugins.react,
    plugins.reactHooks,
    plugins.reactA11y,
    plugins.next,
    ...configs.next.recommended,
    rules.react.strict,
]);

const typescriptConfig = defineConfig([
    plugins.typescriptEslint,
    ...configs.base.typescript,
    rules.typescript.typescriptEslintStrict,
    ...configs.next.typescript,
]);

export default defineConfig([
    includeIgnoreFile(gitignorePath),
    ...jsConfig,
    ...nextConfig,
    ...typescriptConfig,
    {
        name: 'eslint-comments',
        plugins: {
            'eslint-comments': eslintComments,
        },
        rules: {
            ...eslintComments.configs.recommended.rules,
        },
    },
    {
        name: 'no-jquery',
        plugins: {
            'no-jquery': noJquery,
        },
        rules: {
            ...noJquery.configs.all.rules,
        },
    },
    {
        name: 'custom/overrides',
        rules: {
            // Max line length - ignore imports
            '@stylistic/max-len': ['error', {
                code: 100,
                ignorePattern: '^import\\s.+from\\s.+;?$',
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true,
            }],

            // Indent configuration with detailed options
            indent: ['error', 4, { SwitchCase: 1 }],
            'react/jsx-indent': ['error', 4],
            'react/jsx-indent-props': ['error', 4],
            '@stylistic/indent': ['error', 4, {
                SwitchCase: 1,
                VariableDeclarator: 1,
                outerIIFEBody: 1,
                FunctionDeclaration: {
                    parameters: 1,
                    body: 1,
                },
                FunctionExpression: {
                    parameters: 1,
                    body: 1,
                },
                CallExpression: {
                    arguments: 1,
                },
                ArrayExpression: 1,
                ObjectExpression: 1,
                ImportDeclaration: 1,
                flatTernaryExpressions: false,
                ignoredNodes: [
                    'JSXElement',
                    'JSXElement > *',
                    'JSXAttribute',
                    'JSXIdentifier',
                    'JSXNamespacedName',
                    'JSXMemberExpression',
                    'JSXSpreadAttribute',
                    'JSXExpressionContainer',
                    'JSXOpeningElement',
                    'JSXClosingElement',
                    'JSXText',
                    'JSXEmptyExpression',
                    'JSXSpreadChild',
                ],
                ignoreComments: false,
            }],

            // Require semicolon delimiter on types and interfaces
            '@stylistic/member-delimiter-style': 'error',

            // Require space before function paren
            'space-before-function-paren': ['error', {
                anonymous: 'always',
                named: 'always',
                asyncArrow: 'always',
            }],
            '@stylistic/space-before-function-paren': 0,

            // JSX A11y rules
            'jsx-a11y/anchor-is-valid': ['error', {
                components: ['Link'],
                specialLink: ['hrefLeft', 'hrefRight'],
                aspects: ['invalidHref', 'preferButton'],
            }],
            'jsx-a11y/control-has-associated-label': 0,
            'jsx-a11y/label-has-associated-control': ['error', {
                required: {
                    some: ['nesting', 'id'],
                },
            }],
            'jsx-a11y/label-has-for': ['error', {
                required: {
                    some: ['nesting', 'id'],
                },
            }],

            // General rules
            'newline-before-return': 1,
            'no-case-declarations': 0,
            'no-param-reassign': 0,
            'no-underscore-dangle': 'off',

            // Next.js rules
            '@next/next/no-img-element': 'off',

            // React rules
            'react-hooks/exhaustive-deps': 'error',
            'react/function-component-definition': 0,
            'react/jsx-no-useless-fragment': 'off',
            'react/jsx-props-no-spreading': 0,
            'react/require-default-props': 0,
            'react/prop-types': 'off',
            'react/jsx-one-expression-per-line': 'off',
            'react/jsx-fragments': ['error', 'syntax'],
            'react/jsx-child-element-spacing': 'off',
            'react/jsx-sort-props': 'off',
        },
    },
    {
        name: 'custom/import-overrides',
        plugins: {
            import: importPlugin,
        },
        rules: {
            // Import extensions configuration
            'import/extensions': ['error', 'never'],
            'import-x/extensions': ['error', 'never'],

            // Import rules
            'import/no-named-default': 'off',
            'import-x/no-named-default': 'off',
            'import-x/no-rename-default': 'off',
            'import/prefer-default-export': 'off',
            'import-x/prefer-default-export': 'off',
            'import/order': 'off',
            'import-x/order': 'off',
        },
    },
    {
        name: 'custom/typescript-overrides',
        files: ['**/*.ts', '**/*.tsx'],
        rules: {
            // TypeScript specific rules
            '@typescript-eslint/method-signature-style': 'error',
            '@typescript-eslint/no-base-to-string': 'error',
            '@typescript-eslint/restrict-template-expressions': 'error',
            '@typescript-eslint/restrict-plus-operands': 'error',
            '@typescript-eslint/no-inferrable-types': 0,
            '@typescript-eslint/no-unused-vars': ['error', { caughtErrors: 'none' }],
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/prefer-nullish-coalescing': 'off',
            '@typescript-eslint/array-type': 'off',
            '@typescript-eslint/consistent-type-imports': 'off',
            '@typescript-eslint/consistent-indexed-object-style': 'off',
            '@typescript-eslint/consistent-type-definitions': 'off',
            '@typescript-eslint/no-duplicate-type-constituents': 'off',
            '@typescript-eslint/no-unnecessary-type-arguments': 'off',
        },
    },
    {
        name: 'custom/jsx-tsx-overrides',
        files: ['**/*.jsx', '**/*.tsx'],
        rules: {
            // Disable max-len for JSX/TSX files
            'max-len': 'off',
            '@stylistic/max-len': 'off',
        },
    },
]);
