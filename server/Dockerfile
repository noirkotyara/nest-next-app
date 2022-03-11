FROM node:17.3.0-alpine AS development

RUN mkdir -p /usr/app/server
WORKDIR /usr/app/server

COPY package.json .

RUN npm install --only=development

COPY . .

RUN npm run build
