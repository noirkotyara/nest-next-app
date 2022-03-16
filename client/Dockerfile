FROM node:17.3.0-alpine As development

RUN mkdir -p /usr/app/client
WORKDIR /usr/app/client

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build


FROM node:17.3.0-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/app/client

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/app/client/.next ./.next

CMD ["npm", "run", "start"]

#FROM nginx as nginxproduction
#
#EXPOSE 3006:3006
#
#COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
#COPY --from=production /usr/app/client/.next /usr/share/nginx/html
#
#ENTRYPOINT ["nginx", "-g", "daemon off;"]
