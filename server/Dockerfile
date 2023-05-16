FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/h

RUN npm install

COPY . .

RUN npm run generate

ENV NODE_ENV production
ENV PORT ${SERVER_PORT}

EXPOSE ${SERVER_PORT}

CMD ["npm", "run", "start:migrate"]