FROM registry.bookmyshow.org/alpine/nodejs8

EXPOSE 80

ADD ./src/ /home/code

WORKDIR /home/code

RUN npm install -y

CMD [ "npm", "start" ]