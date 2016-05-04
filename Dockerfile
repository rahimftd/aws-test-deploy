FROM node
RUN mkdir ./app
COPY . /app
WORKDIR ./app
RUN npm install -q

EXPOSE 3000
CMD ["node", "server.js"]
