FROM node:16 as build-stage
WORKDIR /app
COPY package.json /app/
COPY package-lock.json /app/
RUN npm ci
COPY . /app/
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build-stage /app/build /usr/share/nginx/html
COPY docker.nginx.default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
