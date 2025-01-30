Serving static files with nginx
bind mount files into a nginx - container

`docker run --mount type=bind,source="$(pwd)"/dist,target=/usr/share/nginx/html -p 8080:80 nginx:latest`
