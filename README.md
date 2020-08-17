# Neo4j + docker + docker-compose + node.js + webpack vanilla JS

## how to start
- run terminal
- `$ make`

### dependencies:
- `make`
- `docker` [https://www.docker.com/products/docker-engine](https://www.docker.com/products/docker-engine)
- `docker-compose` [https://docs.docker.com/compose/](https://docs.docker.com/compose/)

### docker.host
- OSX: please check `docker-machine ip`
- Linux: `127.0.0.1` or `localhost`

### neo4j
It binds to port `docker.host:17474` [http://docker.host:17474/](http://docker.host:17474/)  (web interface)
- Login: `neo4j`
- Password: `test`

### app
`docker.host:13000` [http://docker.host:13000/](http://docker.host:13000/) or http://localhost:13000
