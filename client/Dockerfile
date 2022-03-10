#FROM node:17.3.0-alpine
#
#RUN mkdir -p /usr/app/client
#WORKDIR /usr/app/client
#
#COPY package.json .
#RUN npm install
#COPY . .
#
#RUN npm run build
#
#CMD ["npm", "start"]

FROM node:17.3.0-alpine As development

WORKDIR /usr/app/client

COPY package.json .
RUN npm install

COPY . .

RUN npm run build


FROM nginx as production

#COPY .nginx/nginx.conf /etc/nginx/nginx.conf

RUN #rm -rf /usr/share/nginx/html/*

COPY --from=development /usr/app/client/.next /usr/share/nginx/html
