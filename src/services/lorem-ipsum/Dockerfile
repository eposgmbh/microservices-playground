FROM node:8.10-alpine as build-env

WORKDIR /build

COPY package.json ./
RUN npm install

COPY ./ ./
RUN npm run build

ADD https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh ./
RUN chmod +x wait-for-it.sh

EXPOSE 80

ENTRYPOINT [ "npm", "start" ]
