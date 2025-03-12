# RxAnte PHP App Bootstrap Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## 2.0.1 - 2025-03-12
### Fixed
- Fixed an issue with @typescript-eslint/no-unused-vars flagging the `error` argument in try/catch blocks if the argument was unused. This is frustrating because the variable has to be there, but you may not always want to use the variable.

## 2.0.0 - 2025-03-12
### Added
- PHP: Updated [PHPStan](https://github.com/phpstan/phpstan) to 2.x
- ESLint: Switched to [@kesills/eslint-config-airbnb-typescript](https://github.com/Kenneth-Sills/eslint-config-airbnb-typescript) (from [eslint-config-airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript), which is no longer being maintained)
- ESLint: Disabled the rule requiring 1 expression per line in JSX/TSX
- ESLint: Updated rules to cover as many cases as possible of trying to use things as strings that aren't strings
### Changed
- Added copious notes and code comments about rules, why they're there, and what they do

## 1.1.2 - 2024-12-12
### Fixed
- Fixed bugs from previous release

## 1.1.1 - 2024-12-12
### Fixed
- Fixed eslint bugs with switch/case statements, react/prop-types validation when Typescript validates just fine, and underscore dangling. While it was a useful rule to overcome pseudo-private properties at one time, now it's just annoying when third-parties outside our control use underscores on properties and we use it all over our codebase.

## 1.1.0 - 2024-12-10
### Changed
- Added bnf/phpstan-psr-container

## 1.0.1 - 2024-12-06
### Changed
- Set PHPStan to *not* report unmatched ignored errors

## 1.0.0 - 2024-11-27
### Added
- Initial release
