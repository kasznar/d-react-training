FROM node:14-alpine as builder

WORKDIR /workdir
COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build


FROM nginx:latest as runner

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /workdir/build /usr/share/nginx/html

EXPOSE 80


CMD ["nginx", "-g", "daemon off;"]
