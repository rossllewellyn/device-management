FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

ENV NODE_ENV production
ENV PORT ${CLIENT_PORT}

EXPOSE ${CLIENT_PORT}

CMD ["npm", "start"]