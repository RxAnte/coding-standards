# RxAnte PHP App Bootstrap Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

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
