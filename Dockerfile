FROM node:22-alpine
  
WORKDIR /app

COPY package*.json ./
RUN npm ci --no-audit --no-fund

COPY . .

ENV PORT=8081
EXPOSE 8081

HEALTHCHECK --interval=2s --timeout=2s --start-period=15s --retries=30 \
  CMD wget -q --spider http://localhost:8081/ || exit 1

CMD ["npm", "start"]
