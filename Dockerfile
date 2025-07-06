# User an official node.js runtime as a parent image
FROM node:22-alpine

# Set the working directory on our container
WORKDIR /app

#Copy the package.json and the package-lock.json files to the container
COPY package*.json .

# Install the dependencies
RUN npm install

# Copy the rest of the application code // .-> current file .->current docker environment
COPY . .

# 🔧 Generate the Prisma client
RUN npx prisma generate

# Expose the port that the app runs on
EXPOSE 5000

# Define the command to run ur application
CMD ["node", "./src/server.js"]