FROM mariadb:latest

ENV MARIADB_ROOT_PASSWORD 123456
ENV MARIADB_USER biker
ENV MARIADB_PASSWORD biker
ENV MARIADB_DATABASE citybikes

COPY init_db.sql /docker-entrypoint-initdb.d/init_db.sql
COPY journey_data.csv /
COPY station_data.csv /
