/**
 * RxAnte takes some exceptions to the AirBNB style
 */
const overrideRules = {
    /**
     * Set indents to 4 spaces
     * (much more readable, also inline with our PHP standards)
     */
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

    /**
     * Require a semicolon delimiter on types and interfaces
     * Allowed:
     * ```
     * export type SomeType = {
     *     foo: string;
     *     bar: boolean;
     * };
     * ```
     * Not allowed:
     * ```
     * export type SomeType = {
     *     foo: string,
     *     bar: boolean,
     * };
     * ```
     */
    '@stylistic/member-delimiter-style': 'error',

    /**
     * Require a space before function paren
     * correct: `function foo () {}`
     * incorrect: `function foo() {}`
     */
    'space-before-function-paren': ['error', {
        anonymous: 'always',
        named: 'always',
        asyncArrow: 'always',
    }],
    // Disables stylistics conflicting rule with the above
    '@stylistic/space-before-function-paren': 0,

    /** Make sure we can add extensions to imports for packages if required */
    'import/extensions': [
        'error',
        'ignorePackages',
        {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
        },
    ],

    /**
     * Allows naming default imports like so:
     * `import { default as myDefault } from 'module';`
     * (Disabling this ability is silly, sometimes you need to overcome
     * naming conflicts, hence our override)
     */
    'import/no-named-default': 'off',

    /** There's just no reason why we MUST have a default export in a file */
    'import/prefer-default-export': 'off',

    /** Make sure Next links are set up correctly */
    'jsx-a11y/anchor-is-valid': ['error', {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
    }],

    /** This rules causes as many problems as it solves */
    'jsx-a11y/control-has-associated-label': 0,

    /** Allow nesting association for labels as well as ID association */
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

    /** Match our PHP style and require a new line before return */
    'newline-before-return': 1,

    /** Allow `let` `const` `function` and `class` declarations in switch */
    'no-case-declarations': 0,

    /** Allow function params to be reassigned */
    'no-param-reassign': 0,

    /** Allow multiple React function component styles */
    'react/function-component-definition': 0,

    /** Allow using JSX fragments whenever we darn well please */
    'react/jsx-no-useless-fragment': 'off',

    /** Allow using the spread operator for JSX props */
    'react/jsx-props-no-spreading': 0,

    /** This is a bad rule and it should feel bad */
    'react/require-default-props': 0,

    /**
     * We'll use dangling underscores if we please, but particularly when
     * dealing with legacy libraries
     */
    'no-underscore-dangle': 'off',

    /** We use typescript, we don't need this */
    'react/prop-types': 'off',

    /**
     * This should be up to the developer. When composing HTML, often requiring
     * and enforcing one expression per line really makes things look odd and
     * very difficult to scan and read.
     */
    'react/jsx-one-expression-per-line': 'off',
};

/**
 * We use an override for files with extensions `['*.ts', '*.tsx']` to add
 * typescript specific rules. Because of that, our base overrides get overridden
 * by re-applying rules from the typescript specific AirBNB rules, so we want to
 * add typescript override to our base overrides, and feed that in to the
 * `rules` key in the override. And we can't have our typescript rules in our
 * base overrides because it will actually throw an error when running on
 * non-typescript files.
 */
const typescriptRules = {};
Object.assign(typescriptRules, overrideRules, {
    /**
     * Forbid shorthand method signature on interfaces
     * allowed: `interface Foo { func: (arg: string) => number }`
     * not allowed: `interface Example1 { func(arg: string): number }`
     */
    '@typescript-eslint/method-signature-style': 'error',

    /**
     * Prevent calling `toString()` on objects that do not provide a meaningful
     * string representation (prevents `[object Object]`)
     */
    '@typescript-eslint/no-base-to-string': 'error',

    /**
     * Allow explicitly setting types on variables and the like
     * allowed: `const count: number = 5;`
     * If rule was enabled, above would not be allowed, instead you'd be
     * required to let typescript infer the type: `const count = 5;`
     * It's fine to let typescript infer, but sometimes you want to be explicit
     */
    '@typescript-eslint/no-inferrable-types': 0,
});

module.exports = {
    /**
     * Our base javascript ruleset
     */
    extends: [
        'airbnb',
        'airbnb/hooks',
        'plugin:eslint-comments/recommended',
        'plugin:no-jquery/all',
    ],
    plugins: [
        'no-jquery',
        'disable',
    ],
    /**
     * We have specific rules to take exception to some things in the
     * AirBNB style
     */
    rules: overrideRules,
    overrides: [
        /**
         * Typescript file specific ruleset
         */
        {
            files: ['*.ts', '*.tsx'],
            extends: [
                'airbnb',
                '@kesills/airbnb-typescript',
                'airbnb/hooks',
                'plugin:@typescript-eslint/recommended',
                'plugin:eslint-comments/recommended',
                'plugin:no-jquery/all',
            ],
            /**
             * Typescript files need a parser to ESLint understands it and knows
             * about the types
             */
            parserOptions: {
                parser: '@typescript-eslint/parser',
                project: './tsconfig.json',
            },
            /**
             * Re-apply our base overrides and exceptions, as well as add a
             * couple of typescript specific ones.
             */
            rules: typescriptRules,
        },
        /**
         * JSX/TSX specific rules
         */
        {
            files: ['*.jsx', '*.tsx'],
            rules: {
                /**
                 * This is a very irritating rule when composing HTML. Enforcing
                 * a line length is a great thing in standard programming
                 * practice, but with HTML composition it's just not feasible.
                 */
                'max-len': 'off',
            },
        },
    ],
};
