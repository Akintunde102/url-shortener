FROM node:10

ENV NODE_ENV dev
ENV NODE_CONFIG_ENV dev

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY . .

WORKDIR /usr/src/app/client

COPY client/package.json ./client

RUN npm install

COPY . .

WORKDIR /usr/src/app

EXPOSE 4000

CMD ["npm", "start"]