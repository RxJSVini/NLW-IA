FROM node:16 as builder

# Estágio de build da aplicação
WORKDIR /build

ADD package*.json pnpm*.yaml vite.config.ts tailwind.config.js tsconfig*.json /build/

RUN npm install
    
COPY . .

RUN npm run build

#Estágio de publicação no nginx
FROM nginx

WORKDIR /usr/share/nginx/html

COPY --from=builder /build  /usr/share/nginx/html

# EXPOSE 80