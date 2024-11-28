# PHPStan

To use the [PHPStan](https://phpstan.org/config-reference) config in your projects:

- `composer require --dev rxante/coding-standards`
- Reference `vendor/rxante/coding-standards/phpstan.neon` in your project's `phpstan.neon` file
- From the command line you can run PHPStan as follows: `php -d memory_limit=4G ./vendor/bin/phpstan analyse`

Example `phpstan.neon` configuration file:

```neon
parameters:
    paths:
        - public/index.php
        - config
        - src
        - tests
        - cli
    excludePaths:
        analyseAndScan:
            - src/Logging/Processors/DatadogTraceProcessor.php

includes:
    - vendor/rxante/coding-standards/phpstan.neon
```
