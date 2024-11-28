# TSConfig

The RxAnte [Typescript](https://www.typescriptlang.org) configuration for Next projects.

To use this TSConfig configuration in your projects:

- `pnpm add -D eslint-config-rxante-coding-standards`
    - (or, if you prefer or are using the older, slower `npm` and can't or don't want to switch, run `npm install eslint-config-rxante-coding-standards --save-dev`)
- Extend `./node_modules/eslint-config-rxante-coding-standards/tsconfig.json` in your tsconfig.json
- You can run: `npx tsc`

Example `tsconfig.json`:

```json
{
    "extends": "./node_modules/eslint-config-rxante-coding-standards/tsconfig.json",
    "include": [
        "next-env.d.ts",
        "**/*.ts",
        "**/*.tsx",
        ".next/types/**/*.ts"
    ],
    "exclude": [
        "node_modules"
    ]
}
```
