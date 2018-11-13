FROM node:10

WORKDIR /app

# Install app dependencies
COPY package.json package.json

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Copy everything
COPY . .

EXPOSE 8080

# Start server and expose port
CMD [ "node", "server.js" ]
