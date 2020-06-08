# pull official base image
FROM node:12.13.1-alpine

# set working directory
WORKDIR /usr/src/app

# update npm
RUN npm install -g npm

# add `/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./

# add app
COPY . ./

# install app dependencies
RUN npm ci -qy
RUN npm install react-scripts@3.4.1 -g --silent

ENV PORT 3001

EXPOSE 3001

# start app
CMD ["npm", "start"]
