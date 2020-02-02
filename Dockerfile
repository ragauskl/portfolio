FROM docker:stable

ARG GITHUB_TOKEN
ARG ENV_DECRYPTION_KEY

ENV NODE_ENV "ci"
ENV GITHUB_TOKEN $GITHUB_TOKEN
ENV ENV_DECRYPTION_KEY $ENV_DECRYPTION_KEY
ENV NPM_TOKEN $NPM_TOKEN

WORKDIR /portfolio
ADD . .

RUN echo "//registry.lina.codes/:_authToken=\${NPM_TOKEN}" > ~/.npmrc && \
  echo "registry=https://registry.npmjs.org/" >> ~/.npmrc && \
  echo "@prtf:registry=https://registry.lina.codes/" >> ~/.npmrc && \
  export GITHUB_USER=ragauskl:$GITHUB_TOKEN && \
  git config --global user.email "$GITHUB_EMAIL" && \
  git config --global user.name "$GITHUB_USER" && \
  git config user.email "$GITHUB_EMAIL" && \
  git config user.name "$GITHUB_USER" && \
  git remote set-url origin https://$GITHUB_USER@github.com/ragauskl/portfolio.git
