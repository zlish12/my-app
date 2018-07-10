# base image
FROM node:9.11.1 AS build

WORKDIR /usr/src/
COPY package.json /usr/src/
RUN yarn install
COPY . /usr/src/
RUN yarn build

FROM nginx:1.13.12-alpine
COPY --from=build /usr/src/build /usr/share/nginx/html/