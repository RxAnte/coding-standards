<?php

declare(strict_types = 1);

return [
    'includes' => [
        dirname(__DIR__, 2) . '/phpstan/phpstan-deprecation-rules/rules.neon',
        dirname(__DIR__, 2) . '/phpstan/phpstan-strict-rules/rules.neon',
        dirname(__DIR__, 2) . '/phpstan/phpstan-mockery/extension.neon',
        dirname(__DIR__, 2) . '/bnf/phpstan-psr-container/extension.neon',
    ],
];
