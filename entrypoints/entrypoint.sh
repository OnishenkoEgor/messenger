#!/usr/bin/env bash
set -e
composer install

#php artisan migrate  --force --seed

# Run the main container command
php-fpm
exec "$@"
