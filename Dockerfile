# Use an official node runtime as a parent image
FROM node:latest

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package.json /app
RUN npm install

# Add rest of the client code
COPY . /app

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run the app when the container launches
CMD ["npm", "start"]
