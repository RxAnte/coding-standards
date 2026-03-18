<?php

declare(strict_types = 1);

use Composer\InstalledVersions;

/**
 * We just need the path to a package we know is installed, and since this
 * package also requires `doctrine/coding-standard` we can use that one.
 * We can't use our own package name because it gets weird when testing as
 * a symlinked package
 */
$doctrinePath = (string) InstalledVersions::getInstallPath(
    'doctrine/coding-standard'
);

$doctrineRealPath = (string) realpath($doctrinePath);

$vendorDir = dirname($doctrineRealPath, 2);

return [
    'includes' => [
        $vendorDir . '/phpstan/phpstan-deprecation-rules/rules.neon',
        $vendorDir . '/phpstan/phpstan-strict-rules/rules.neon',
        $vendorDir . '/phpstan/phpstan-mockery/extension.neon',
        $vendorDir . '/bnf/phpstan-psr-container/extension.neon',
    ],
];
