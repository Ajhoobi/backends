# Use an official Node.js runtime as a parent image
FROM node:15-alpine
WORKDIR /app 
COPY package*.json ./ 
RUN npm install 
COPY . . 
EXPOSE 5000 
CMD ["npm", "start"]
