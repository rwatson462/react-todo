FROM node:18

COPY --from=composer /usr/bin/composer /usr/bin/composer

RUN mkdir /app

WORKDIR /app

COPY ./entrypoint.sh /entrypoint.sh
ENTRYPOINT /entrypoint.sh
