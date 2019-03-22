FROM node:10.13.0-alpine
RUN mkdir -p /client
WORKDIR ./client
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD npm start


