FROM oven/bun:latest

WORKDIR /backend

COPY bun.lock .
COPY package.json .
RUN bun install


COPY . .

EXPOSE 3000
CMD [ "bun", "run", "server" ]