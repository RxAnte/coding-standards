module.exports = {
    'extends': [
        'airbnb',
        'airbnb/hooks',
        'plugin:eslint-comments/recommended',
        'plugin:no-jquery/all',
    ],
    'plugins': [
        'no-jquery',
        'disable',
    ],
    'processor': 'disable/disable',
    'env': {
        'browser': true,
        'es6': true,
    },
    'parserOptions': {
        'parser': 'babel-eslint',
        'project': './tsconfig.json'
    },
    'rules': {
        "@typescript-eslint/indent": ["error", 4, {
            "SwitchCase": 1,
            "VariableDeclarator": 1,
            "outerIIFEBody": 1,
            "FunctionDeclaration": {
                "parameters": 1,
                "body": 1
            },
            "FunctionExpression": {
                "parameters": 1,
                "body": 1
            },
            "CallExpression": {
                "arguments": 1
            },
            "ArrayExpression": 1,
            "ObjectExpression": 1,
            "ImportDeclaration": 1,
            "flatTernaryExpressions": false,
            "ignoredNodes": ["JSXElement", "JSXElement > *", "JSXAttribute", "JSXIdentifier", "JSXNamespacedName", "JSXMemberExpression", "JSXSpreadAttribute", "JSXExpressionContainer", "JSXOpeningElement", "JSXClosingElement", "JSXText", "JSXEmptyExpression", "JSXSpreadChild"],
            "ignoreComments": false
        }],
        '@typescript-eslint/member-delimiter-style': 'error',
        '@typescript-eslint/method-signature-style': 'error',
        "@typescript-eslint/no-base-to-string": "error",
        '@typescript-eslint/no-inferrable-types': 0,
        '@typescript-eslint/space-before-function-paren': 0,
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                'js': 'never',
                'jsx': 'never',
                'ts': 'never',
                'tsx': 'never'
            }
        ],
        'import/no-named-default': 'off',
        'import/prefer-default-export': 'off',
        'indent': ['error', 4],
        'jsx-a11y/anchor-is-valid': ['error', {
            'components': ['Link'],
            'specialLink': ['hrefLeft', 'hrefRight'],
            'aspects': ['invalidHref', 'preferButton']
        }],
        'jsx-a11y/control-has-associated-label': 0,
        'jsx-a11y/label-has-associated-control': ['error', {
            'required': {
                'some': ['nesting', 'id']
            }
        }],
        'jsx-a11y/label-has-for': ['error', {
            'required': {
                'some': ['nesting', 'id']
            }
        }],
        'newline-before-return': 1,
        'no-case-declarations': 0,
        'no-param-reassign': 0,
        'react/function-component-definition': 0,
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-no-useless-fragment': 'off',
        'react/jsx-props-no-spreading': 0,
        'react/require-default-props': 0,
        "space-before-function-paren": ['error', {
            'anonymous': 'always',
            'named': 'always',
            'asyncArrow': 'always'
        }]
    },
    'overrides': [
        {
            'files': ['*.ts', '*.tsx'],
            'extends': [
                'airbnb',
                'airbnb-typescript',
                'airbnb/hooks',
                'plugin:@typescript-eslint/recommended',
                'plugin:eslint-comments/recommended',
                'plugin:no-jquery/all'
            ],
            'rules': {
                'jsx-a11y/control-has-associated-label': 0,
                'react/require-default-props': 0,
                '@typescript-eslint/member-delimiter-style': "error",
                '@typescript-eslint/method-signature-style': "error",
                'jsx-a11y/label-has-associated-control': [ "error", {
                    'required': {
                        'some': [ 'nesting', 'id'  ]
                    }
                }],
                'jsx-a11y/label-has-for': [ 'error', {
                    'required': {
                        'some': [ 'nesting', 'id'  ]
                    }
                }],
                'jsx-a11y/anchor-is-valid': [ 'error', {
                    'components': [ 'Link' ],
                    'specialLink': [ 'hrefLeft', 'hrefRight' ],
                    'aspects': [ 'invalidHref', 'preferButton' ]
                }],
                'no-case-declarations': 0,
                '@typescript-eslint/space-before-function-paren': 0,
                '@typescript-eslint/no-inferrable-types': 0,
                'react/jsx-props-no-spreading': 0,
                'react/function-component-definition': 0,
                'no-param-reassign': 0,
                'indent': ['error', 4],
                'react/jsx-indent': ['error', 4],
                'react/jsx-indent-props': ['error', 4],
                '@typescript-eslint/indent': ['error', 4, {
                    'SwitchCase': 1,
                    'VariableDeclarator': 1,
                    'outerIIFEBody': 1,
                    'FunctionDeclaration': {
                        'parameters': 1,
                        'body': 1
                    },
                    'FunctionExpression': {
                        'parameters': 1,
                        'body': 1
                    },
                    'CallExpression': {
                        'arguments': 1
                    },
                    'ArrayExpression': 1,
                    'ObjectExpression': 1,
                    'ImportDeclaration': 1,
                    'flatTernaryExpressions': false,
                    'ignoredNodes': [
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
                    'ignoreComments': false
                }],
                'space-before-function-paren': ['error', {
                    'anonymous': 'always',
                    'named': 'always',
                    'asyncArrow': 'always'
                }],
                'import/extensions': [
                    'error',
                    'ignorePackages',
                    {
                        'js': 'never',
                        'jsx': 'never',
                        'ts': 'never',
                        'tsx': 'never'
                    }
                ],
                'newline-before-return': 1,
                'import/no-named-default': 'off',
                'react/jsx-no-useless-fragment': 'off',
                'import/prefer-default-export': 'off'
            }
        },
        {
            'files': ['*.jsx', '*.tsx'],
            'rules': {
                'max-len': 'off'
            }
        }
    ]
};
