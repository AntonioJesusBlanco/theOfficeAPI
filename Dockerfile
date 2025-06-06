# Etapa 1: Build frontend
FROM node:18 as build-frontend
WORKDIR /app
COPY frontEnd/package*.json ./frontEnd/
RUN cd frontEnd && npm install
COPY frontEnd/ ./frontEnd/
RUN cd frontEnd && npm run build

# Etapa 2: Setup backend
FROM node:18
WORKDIR /app

COPY backEnd/package*.json ./
RUN npm install

COPY backEnd/ ./
COPY --from=build-frontend /app/frontEnd/dist/front-end/browser ./public

# Cambiar Express para servir frontend desde /public
ENV PORT=3000
EXPOSE 3000

CMD ["node", "index.js"]
