FROM node:18
WORKDIR /myapp
COPY package*.json ./
COPY package-lock.json ./
RUN npm install
COPY . .
EXPOSE 5176
CMD ["npm", "run", "dev"]