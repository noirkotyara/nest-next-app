FROM node:17.3.0-alpine As development

WORKDIR /usr/app/server

COPY package.json .
RUN npm install

COPY . .

RUN npm run build


FROM nginx as production

#ARG NODE_ENV=production
#ENV NODE_ENV=${NODE_ENV}

#WORKDIR usr/app/server

#COPY package.json .

COPY --from=development /usr/app/server/dist /usr/share/nginx/html

#CMD ["node", "dist/main"]
