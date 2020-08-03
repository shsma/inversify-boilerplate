FROM mhart/alpine-node:13 as base
RUN apk --update --no-cache add bash curl
WORKDIR /code
COPY . /code
RUN npm install --no-progress
EXPOSE 80

FROM base AS develop
ENV NODE_ENV=development
COPY --from=ssense/docker-layers:sonarqube / /

FROM base AS release
ENV NODE_ENV=production
CMD ["npm","run","start"]
