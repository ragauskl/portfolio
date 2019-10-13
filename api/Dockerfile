FROM mhart/alpine-node:12

ARG ENV_DECRYPTION_KEY

ENV ENV_DECRYPTION_KEY $ENV_DECRYPTION_KEY
ENV NODE_ENV 'production'

WORKDIR /api
COPY . .

RUN npm i

ENTRYPOINT npm run s:prod
