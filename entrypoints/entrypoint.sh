#!/usr/bin/env bash
set -e
php-fpm
exec "$@"
