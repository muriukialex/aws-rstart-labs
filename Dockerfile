FROM node:18-alpine as base

RUN apk add --no-cache g++ make py3-pip libc6-compat

WORKDIR /app

COPY package*.json ./

FROM base as builder

WORKDIR /app

COPY . .
# Install project dependencies
RUN npm install
RUN npm run build

FROM base as production

WORKDIR /app

ENV NODE_ENV=production

# Install only production dependencies
RUN npm ci --only=production

# Install pm2 process manager
RUN npm install pm2@latest -g

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

USER nextjs

# Copy necessary files from builder stage
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/next.config.mjs ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public
COPY --from=builder /app/.env.production ./.env

EXPOSE 3000

# specifies the command to run when the Docker image is started 
ENTRYPOINT ["./entrypoint.sh"]

