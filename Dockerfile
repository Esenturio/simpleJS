FROM nginx:latest
WORKDIR /app

COPY package.json .
RUN npm install

COPY . .
CMD ["systemctl", "start", "nginx"]