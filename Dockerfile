FROM node:9.11-alpine AS build

WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build
RUN ls dist

FROM nginx:stable

COPY --from=build /app/dist/ /usr/share/nginx/html
# COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80