#!/usr/bin/env bash
set -e

php artisan queue:work
