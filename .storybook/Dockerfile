FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN npm install -g corepack@latest
RUN corepack enable
RUN corepack prepare pnpm@latest --activate
COPY . /app
WORKDIR /app

FROM base AS storybook-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

FROM storybook-deps AS build
RUN pnpm run build:storybook

FROM nginx:alpine AS runtime
COPY --from=build /app/storybook-static /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
