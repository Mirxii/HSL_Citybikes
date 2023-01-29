# HSL_Citybikes

My take on the pre-assignment for this year's Solita dev academy.

## Description

App for viewing past trips made with Helsinki's city bikes.

## Getting Started

### Dependencies

- Docker Desktop
- Python and Pandas
  - For preprocessing the data, might be better to be do with something else to drop the dependencies
- TBD

### Importing the data

- Download the three csv files below and move them to `data` folder

  - <https://dev.hsl.fi/citybikes/od-trips-2021/2021-05.csv>
  - <https://dev.hsl.fi/citybikes/od-trips-2021/2021-06.csv>
  - <https://dev.hsl.fi/citybikes/od-trips-2021/2021-07.csv>
  - <https://opendata.arcgis.com/datasets/726277c507ef4914b0aec3cbcfcbfafc_0.csv>

- Run `clean_data.py` file to process. This script drops journeys with less than 10 second duration or less than 10 meters travelled and refactors some names to make them more uniform.
- The script creates two csv files into the database folder `db`, one for the journeys and one for the stations.

### Database

- Make sure your Docker Desktop is running
- Run `docker compose up -d` in the root folder to start the MariaDB database.
- Database reads the files created in Importing the data step automatically.

- You can visit the database with adminer tool by going to <http://localhost:8080/> and entering following information.
  - System: `MySQL`
  - Server: `database`
  - Username: `biker`
  - Password: `biker`
  - Database: `citybikes`
