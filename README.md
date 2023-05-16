# Device Management

Monorepo for the Device Management application.

Next.js frontend, Node.js with Fastify backend, PostgreSQL database with Prisma ORM.

## Requirements

node.js, npm, postgres, docker

## Viewing Devices

![Viewing Devices](/readme-images/view-devices.png)

## Adding a Device

![Add a Device](/readme-images/add-device.png)

## Docker Setup & Running (recommended)

- Clone this repository

- Run the docker daemon (e.g. Docker Desktop)

- Build & run the db, server, and client containers

  `cd ./server` then `docker-compose up`

- Navigate to `localhost:3000`

## Local Setup

- Clone this repository

- Install dependancies in client & server directories

  `cd ./server` then `npm i`

  `cd ./client` then `npm i`

- Amend the values in the .env file in ./server for your local postgres

- Generate the prisma schema

  `npm run generate`

## Running Locally

- Run the Node.js RESTful API

  `cd ./server` then `npm run start`

- Run the Next.js frontend application

  `cd ./client` then `npm run dev`

- Navigate to `localhost:3000`

## Futher Improvements:

General:

- Authentication & authorisation (e.g JWT)
- Optimise containerisation (Dockerfile & docker-compose)
- Improve/automate development/containerised environments

Frontend:

- Improve search (e.g. by multiple fields)
- Validation & better error handling
- Dynamic routes (e.g. device_id path)
- State management like Redux
- Accessibility
- Reponsiveness
- Clear date field on edit
- Fix edit/add form submission on enter key
- Fix editing when no changes made
- Sanitise user input
- Tests

Backend:

- Add config for ENV variable loading
- Improve search (e.g. separate query params)
- Paginate search results
- Omit unnecessary fields returned from db with projection
- Tests
