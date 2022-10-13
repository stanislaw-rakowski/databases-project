# Databases project

## Frontend development

Enter frontend app folder:

`cd frontend`

Create `.env` file at the root of directory and fill it with: 

`VITE_SERVER_URL=http://localhost:5000/`

Install the dependencies:

`npm i`

Start the app in dev mode:

`npm run dev`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Backend development

Enter frontend app folder:

`cd backend`

Install the dependencies:

`npm i`

Start the app in dev mode:

`npm run dev`

Build Docker image:

`docker-compose build`

Spin up Docker container:

`docker-compose up`

The server is running at [http://localhost:5000](http://localhost:5000)

After finishing remove docker container:

`docker-compose down`
