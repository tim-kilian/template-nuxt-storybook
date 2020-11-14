FROM node:lts-alpine as build

WORKDIR /app
COPY package.json .
RUN npm set progress=false
RUN npm install --prefer-offline --no-audit --progress=false --production
COPY . .
RUN npm run build
RUN npm run generate
RUN npm run build-storybook

FROM nginx:alpine
RUN mkdir -p /var/www/app
RUN mkdir -p /var/www/storybook
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /var/www/app
COPY --from=build /app/storybook-static /var/www/storybook
EXPOSE 80 81
CMD ["nginx", "-g", "daemon off;"]
