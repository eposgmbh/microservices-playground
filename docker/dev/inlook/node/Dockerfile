FROM node:latest

RUN npm -v && npm install -g @angular/cli

WORKDIR /app

RUN npm install

CMD ["ng", "serve", "--host", "0.0.0.0"]
