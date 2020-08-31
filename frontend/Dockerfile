FROM node:alpine as builder
WORKDIR "/app"
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
# /app/build <---- all the staff we want to run phase (production)!

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html
# default command from nginx is to start nginx automatically

