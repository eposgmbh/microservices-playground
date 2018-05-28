FROM php:7-fpm

ENV BUILD_PACKAGES \
#                  libfreetype6-dev \
#                  libjpeg62-turbo-dev \
#                  libpng-dev
                  libcurl3-gnutls-dev \
                  zlib1g-dev \
#                  libldb-dev \
#                  libldap2-dev \
#                  libxml2-dev \
#                  libicu-dev g++\
#                  libfreetype6-dev \
#                  libpng-dev \
#                  libpq-dev \
                  bzip2

RUN apt-get update && apt-get install -y \
    $BUILD_PACKAGES \
    git \
    zip \
    unzip \
&& rm -rf /var/lib/apt/lists/*

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer \
&& rm /etc/localtime \
&& ln -s /usr/share/zoneinfo/Europe/Berlin /etc/localtime \
&& docker-php-ext-install curl zip pcntl opcache \
&& apt-get purge -y --auto-remove $BUILD_PACKAGES \
&& mkdir /app


COPY ./php.ini /usr/local/etc/php/


WORKDIR /app

CMD ["php", "bin/console", "server:run", "0.0.0.0:9200"]


