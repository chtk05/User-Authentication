FROM node:18
WORKDIR /myapp
COPY package*.json ./
COPY package-lock.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm", "run", "dev"]