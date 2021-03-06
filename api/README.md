* Docker build
  ```sh
  docker build -t lina-codes-api --build-arg ENV_DECRYPTION_KEY=$ENV_DECRYPTION_KEY .
  ```
* Run local
  ```sh
  docker run -p 3000:3000 -e PORT=3000 -t lina-codes-api
  ```

* Deploy
  ```sh
  heroku login
  heroku container:login
  heroku git:remote -a lina-codes-api
  heroku container:push web --arg ENV_DECRYPTION_KEY=$ENV_DECRYPTION_KEY
  heroku container:release web
  ```

* Logs
  ```sh
  heroku logs --tail (--dyno=web)
  ```
