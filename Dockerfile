# The wiki's preview kit in a container: no database, no secrets, no network after npm ci.
#   docker build -t darc-wiki .
#   docker run --rm -p 5173:5173 -v "$PWD/content:/wiki/content" -v "$PWD/media:/wiki/media" -v "$PWD/demos:/wiki/demos" darc-wiki
FROM node:22.23.3-alpine
WORKDIR /wiki
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
# Bind mounts from Windows and macOS don't deliver file events: poll for edits instead.
ENV WIKI_POLL=1
EXPOSE 5173
CMD ["npm","run","preview","--","--host","0.0.0.0"]
