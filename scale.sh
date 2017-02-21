#!/usr/bin/env bash

export MAIN_DOMAIN="generaptr.dkr"

docker-compose scale $1=$2
