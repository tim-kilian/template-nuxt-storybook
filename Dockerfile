FROM node:lts-alpine as build

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
RUN npm run generate

FROM nginx:alpine
RUN mkdir -p /var/www/app
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /var/www/app
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
