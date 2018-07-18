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
libc-client-dev \
libkrb5-dev \
                  bzip2

RUN apt-get update && apt-get install -y \
    $BUILD_PACKAGES \
    git \
    zip \
    gnupg \
    unzip \
&& rm -rf /var/lib/apt/lists/*

RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update && apt-get install -y \
    nodejs \
    yarn

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer \
&& rm /etc/localtime \
&& ln -s /usr/share/zoneinfo/Europe/Berlin /etc/localtime \
&& docker-php-ext-configure imap --with-kerberos  --with-imap-ssl \
&& docker-php-ext-install curl zip pcntl opcache imap \
&& apt-get purge -y --auto-remove $BUILD_PACKAGES \
&& mkdir /app


COPY ./php.ini /usr/local/etc/php/


WORKDIR /app

#CMD ["php", "bin/console", "server:run", "0.0.0.0:9200"]


