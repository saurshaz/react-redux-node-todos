FROM node:7.3.0

MAINTAINER reactest Test

#INSTALL
RUN apt-get update -y
RUN echo `node -v`
RUN npm i -g supervisor yarn

#workaround to mount the directory for dev without having to rerun npm i
RUN mkdir -p /distc/
ADD package.json /distc/
# Install packages
RUN cd /distc && yarn install
ENV NODE_PATH /distc/node_modules
ENV PATH=/distc/node_modules/.bin/:$PATH


RUN mkdir /frontend
RUN cp -a /distc/node_modules /frontend/

WORKDIR /frontend
# Make everything available for start
ADD . /frontend

EXPOSE  8080
