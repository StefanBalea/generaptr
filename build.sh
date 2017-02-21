#!/usr/bin/env bash

# build all containers first
docker-compose -p generaptr -f ./docker-compose.yml build
