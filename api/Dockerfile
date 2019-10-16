FROM mhart/alpine-node:12

ARG ENV_DECRYPTION_KEY

ENV ENV_DECRYPTION_KEY $ENV_DECRYPTION_KEY
ENV NODE_ENV 'production'
ENV HOST '0.0.0.0'

RUN test -n "$ENV_DECRYPTION_KEY"

WORKDIR /api
COPY . .

RUN npm i

CMD ["npm", "run", "s:prod"]
