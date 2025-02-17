ARG APP_PHP_VERSION=8.4
FROM php:$APP_PHP_VERSION-fpm-alpine3.20

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

ARG PHP_APP_EXTENSIONS="pdo_mysql"
ARG NODE_VERSION=20
RUN deluser --remove-home xfs; deluser --remove-home www-data; adduser -D -u 33 www-data; \
    apk add --update --no-cache nginx ffmpeg mysql-client libzip-dev zip unzip libpng libpng-dev git zlib-dev libjpeg-turbo-dev freetype-dev busybox-suid autoconf g++ imagemagick imagemagick-dev libtool make pcre-dev \
    && pecl install imagick \
    && pecl install -o -f redis \
    && touch /var/log/cron.log \
    && chmod 644 /var/log/cron.log \
    && mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini" \
    && docker-php-ext-configure pcntl --enable-pcntl \
    && docker-php-ext-install pcntl \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-configure zip \
    && docker-php-ext-install gd zip bcmath \
    && if [ -n "${PHP_APP_EXTENSIONS}" ]; then docker-php-ext-install ${PHP_APP_EXTENSIONS}; fi \
    && docker-php-ext-enable imagick redis \
    && apk del autoconf g++ libtool make pcre-dev \
    && apk del libpng-dev \
    && crontab -l | { cat; echo "*       *       *       *       *       test \"\$LARAVEL_BACKUP\" = \"true\" && cd /var/www/html && php artisan schedule:run > /var/log/cron.log 2>&1"; } | crontab - \
    && if [ "${NODE_VERSION}" != "none" ]; then curl -fsSL https://rpm.nodesource.com/setup_${NODE_VERSION}.x | bash -; apk add --update --no-cache nodejs npm; npm install npm -g; fi

COPY docker/files/default.conf /etc/nginx/http.d/
COPY docker/files/php.ini /overrides.ini
RUN mv /overrides.ini $PHP_INI_DIR/conf.d/; chmod 644 "$PHP_INI_DIR/conf.d/overrides.ini"
COPY docker/files/start-container /usr/local/bin/start-container
RUN chmod +x /usr/local/bin/start-container

WORKDIR /var/www/html
COPY . .
COPY docker/files/.env.example .env

ARG DEV=false

RUN if [ "${DEV}" = "true" ]; then composer install --optimize-autoloader; else composer install --optimize-autoloader --no-dev; fi; \
    composer clear-cache; \
    rm -f /usr/bin/composer; \
    rm -rf .git; \
    php artisan config:cache; \
    php artisan event:cache; \
    php artisan route:cache; \
    php artisan view:cache; \
    npm install; \
    npm run build; \
    npm prune --omit=dev; \
    npm cache clean --force; \
    apk del npm; \
    rm -rf /var/cache/apk/* jsconfig.json package.json package-lock.json pint.json tsconfig.json *.lock *.js resources/js resources/css; \
    chmod -Rf 775 .; \
    chown -Rf www-data:www-data .

USER root

EXPOSE 80

ENTRYPOINT ["start-container"]
