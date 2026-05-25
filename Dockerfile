FROM node:24.13.0-alpine AS builder

RUN --mount=type=cache,id=corepack,target=/root/.cache/node/corepack \
    corepack enable && corepack prepare pnpm@10.28.1 --activate

WORKDIR /app

COPY --chown=node:node src/package.json src/pnpm-lock.yaml ./

RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store \
    pnpm install --ignore-scripts --frozen-lockfile

ENV PATH=/app/node_modules/.bin:$PATH

COPY src .

RUN ["pnpm", "run", "build"]

FROM nginx:1.26.1-alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/dist .

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]