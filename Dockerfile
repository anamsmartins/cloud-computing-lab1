FROM node:latest

# Run dependencies first as they wont change much
WORKDIR /usr/app
COPY src/package.json .
RUN npm install

COPY src/index.js .

# Separate commands
ENTRYPOINT ["node", "index.js"] 