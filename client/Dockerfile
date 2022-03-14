FROM node:17.3.0-alpine As development

RUN mkdir -p /usr/app/client
WORKDIR /usr/app/client

COPY package*.json ./
RUN npm install --only=dev

COPY . .

RUN npm run build


FROM node:17.3.0-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/app/client

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/app/client/dist ./dist

CMD ["npm", "run", "start"]
