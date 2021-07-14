FROM node:12.18.2-alpine

WORKDIR /srv/node

COPY ./build /srv/node/build
COPY ./package.json /srv/node/package.json
COPY ./node_modules /srv/node/node_modules

CMD npm start
