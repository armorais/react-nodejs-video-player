FROM node:14.17.0-alpine3.13

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . /app
RUN npm ci --loglevel verbose
EXPOSE 80
CMD [ "node", "server.js" ]