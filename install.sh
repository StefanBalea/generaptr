#!/bin/bash

export MAIN_DOMAIN="generaptr.dkr"
# create project network
docker network create -d bridge generaptr 2> /dev/null

# build all containers
./build.sh

# start all containers
./start.sh