# docker-compose-example

> (minimal) example for docker-compose using Node.js & Redis

Requirements:

* Docker
  * https://www.docker.com/community-edition#/download
* docker-compose
  * https://docs.docker.com/compose/install/

`web-src` will contain the example web project based on Node.JS using `express` and `redis`. The redis service will be setup using `docker-compose` in a separate container.

## Run

To start all services in foreground:

```bash
$ docker-compose up --build
```
