FROM node:10.14.1-alpine
RUN mkdir /srv/github-actions-app
WORKDIR /srv/github-actions-app
COPY . .
RUN npm install
RUN npm test