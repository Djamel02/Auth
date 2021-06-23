# Stage 1: build
FROM node:15 AS development

WORKDIR /frontend/src/app

COPY package*.json ./
RUN npm install -g npm@7.18.1

RUN npm install -g @angular/cli@12.0.0 --force

RUN npm install --force

COPY . .

RUN npm run build

EXPOSE 4200