FROM node:lts-alpine

WORKDIR /usr/src/api/

COPY . .

RUN npm install

EXPOSE 8000

CMD ["npm", "start"]