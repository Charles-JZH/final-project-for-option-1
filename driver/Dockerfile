FROM helaili/vuecli as builder

COPY ./driver /driver
WORKDIR /driver
RUN npm install && apt-get install -y vim

CMD ["npm", "run", "client"]
