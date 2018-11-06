FROM node:9

# Create app directory
WORKDIR /app

# Install app dependencies
COPY server/* /app/server/

WORKDIR /app/server

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
WORKDIR /app

COPY src/* /app/src/

# Start server and expose port
CMD [ "node", "server/server.js" ]

EXPOSE 8080
