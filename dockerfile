FROM node:10.15.3-alpine
RUN mkdir -p /src/app
WORKDIR /src/app
COPY . /src/app
RUN npm install -P
EXPOSE 3420
CMD ["npm","start"]