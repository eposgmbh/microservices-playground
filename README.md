# microservices-playground

[![Build Status](https://travis-ci.com/eposgmbh/microservices-playground.svg?branch=master)](https://travis-ci.com/eposgmbh/microservices-playground)

Microservices Playground for the "Asia and no movies" Team.

## Usage

Setup all microservices, infrastructure and apps with docker compose.

```bash
$ cd docker/compose/
$ up.sh
```
## Overview over all apps

|App      |Tech Stack         |Port|API-Gateway      |Tech Stack              |Port|Used Microservices|
|---------|-------------------|----|-----------------|------------------------|----|------------------|
|todos-spa|Angular, Typescript|80  |todos-api-gateway|ASP.NET Core, Ocelot, C#|4000|todos-service     |

## Overview over all microservices

|Microservice       |Port|Tech Stack         |Used Infrastructure|
|-------------------|----|-------------------|-------------------|
|todos-service      |5000|ASP.NET Core, C#   |PostgreSQL, Graylog|
|lorem-ipsum-service|5001|Node.js, Typescript|-                  |
|tags-service       |5002|Spring Boot, Java  |MongoDB            |

## Infrastructure services

|Infrastructure Service|Login        |Ports                               |
|----------------------|-------------|------------------------------------|
|MongoDB               |-            |27017                               |
|PostgreSQL            |root/JklM8765|5432                                |
|pgAdmin4              |-            |5050                                |
|RabbitMQ              |-            |5672, 15672                         |
|Elasticsearch         |-            |9200, 9300                          |
|Graylog               |admin/admin  |9000, 514, 514/udp, 12201, 12201/udp|
