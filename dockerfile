FROM node:alpine

WORKDIR /var/app-next

COPY package*.json ./

RUN npm install && npm install pm2 -g
ENV PM2_PUBLIC_KEY ht24rekk31m5mt8
ENV PM2_SECRET_KEY 4vv63sgcnppoeac

COPY . .
EXPOSE 3000

CMD ["npm", "run", "pm2-start"]