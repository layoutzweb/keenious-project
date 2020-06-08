# pull official base image
FROM node:12.13.1-alpine

# update npm
RUN npm install -g npm

# set working directory
WORKDIR /usr/src/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./

# add app
COPY . .

# install app dependencies
RUN npm install --silent

EXPOSE 3000

# start app
CMD ["npm", "start"]
