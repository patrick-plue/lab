# Docker and Docker Compose

-   for development purposes

-   Dockerfile
-   docker-compose.yml

`docker compose up`
`docker compose up --build`
`docker compose up --no-cache`

host: db

npm run seed needs to be executed inside the container
use docker desktop for this or docker exec -it <containerid | containername>

db:volume - to persist data

app:volume - to update the container with changes - no need for rebuilding

depends-on - so both services run in the same network; here: db not exposed; no ports

useful: https://www.youtube.com/watch?v=RHjXPN_h1YA

### network

-   custom network is not necessary because docker compose up creates a network for the containers
