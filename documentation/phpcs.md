# PHPCS

The RxAnte [PHPCS](https://github.com/squizlabs/PHP_CodeSniffer) coding standard is pretty much based on the [Doctrine Coding Standard](https://github.com/doctrine/coding-standard) and takes only a couple of minor exceptions.

To use in your project:

- `composer require --dev rxante/coding-standards`
- Reference `RxAnteCodingStandards` in your project's `phpcs.xml` file
- From the commandline you can run `php -d memory_limit=4G ./vendor/bin/phpcs` to show any PHPCS errors, or `php -d memory_limit=4G ./vendor/bin/phpcbf` to automatically fix any errors that are fixable.

Example configuration file:

```xml
<?xml version="1.0"?>
<ruleset>
    <!-- Directories to be checked -->
    <file>public/index.php</file>
    <file>config</file>
    <file>src</file>
    <file>tests</file>
    <file>cli</file>

    <!-- Include the RxAnte ruleset -->
    <rule ref="RxAnteCodingStandards" />
</ruleset>
```
