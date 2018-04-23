FROM node:8.11-alpine

ADD . /app

WORKDIR /app

RUN npm install

EXPOSE 8080

ENTRYPOINT [ "npm", "run" ]

CMD [ "start" ]
