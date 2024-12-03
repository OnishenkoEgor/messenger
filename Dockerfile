FROM php:8.2-fpm

RUN apt-get update && apt-get install -y \
    apt-utils \
    libpq-dev \
    libpng-dev \
    libzip-dev \
    zip unzip \
    librdkafka-dev \
    nodejs \
    npm \
    git && \
    docker-php-ext-install pdo_pgsql && \
    docker-php-ext-install bcmath && \
    docker-php-ext-install gd && \
    docker-php-ext-install zip && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN pecl install rdkafka && \
    docker-php-ext-enable rdkafka

RUN pecl install xdebug && \
    docker-php-ext-enable xdebug

COPY ./backend /var/www
COPY ./php/php.ini /usr/local/etc/php/conf.d/php.ini
COPY ./php/xdebug.ini /usr/local/etc/php/conf.d/xdebug.ini
COPY ./entrypoints/entrypoint.sh /var/tmp/entrypoint.sh

WORKDIR /var/www
