# ESLint

The RxAnte [ESLint](https://eslint.org) standards are based largely on the [AirBNB ESLint Standards](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) but with several exceptions. Perhaps the most notable is that we use 4 spaces instead of 2 for tab width, which provides MUCH greater readability and ease of code scanning, as well as matching our PHP coding standards.

To use this ESLint configuration in your projects:

- `pnpm add -D eslint-config-rxante-coding-standards`
    - (or, if you prefer or are using the older, slower `npm` and can't or don't want to switch, run `npm install eslint-config-rxante-coding-standards --save-dev`)
- Extend the RxAnte ESLint coding standards in your `.eslintrc` file.
- From the command line, you can run: `NODE_OPTIONS="--trace-warnings" pnpm run lint --max-warnings=0`

`.eslintrc` example:

```json
{
    "extends": ["rxante-coding-standards"]
}
```
