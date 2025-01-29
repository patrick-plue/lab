# Docker and Docker Compose

-   Dockerfile
-   docker-compose.yml

`docker compose up`
`docker compose up --build`
`docker compose up --no-cache`

host: db

npm run seed needs to be executed inside the container
use docker desktop for this or docker exec -it <containerid>

volume - to persist data

depends-on - so both services run in the same network; here: db not exposed; no ports
