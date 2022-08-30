FROM node:16
WORKDIR /app
COPY ./backend/package.json /app/
COPY ./backend/package-lock.json /app/
RUN npm ci
COPY ./backend/ /app/
