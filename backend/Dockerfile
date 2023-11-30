# Étape de construction
FROM node:latest as build

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

FROM node:latest

WORKDIR /app
COPY --from=build /app .

EXPOSE 3001

CMD ["node", "src/app.js"]
