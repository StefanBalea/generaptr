export MAIN_DOMAIN="generaptr.dkr"

docker-compose kill

docker-compose -p generaptr -f ./docker-compose.yml up -d