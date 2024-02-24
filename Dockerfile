# Choose the Image which has Node installed already
FROM node:18.17-alpine

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

RUN npm install pm2@latest -g

# copy project files and folders to the current working directory 
COPY . .

# specifies that the container will listen on port 3000
EXPOSE 3000

# specifies the command to run when the Docker image is started 
ENTRYPOINT ["./entrypoint.sh"]