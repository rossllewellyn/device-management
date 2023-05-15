# Device Management

Monorepo for the Device Management application.

Next.js frontend, Node.js with Fastify backend, PostgreSQL with Prisma database.

## Requirements

node.js, npm, postgres

## Local Setup

- Clone this repository, install dependancies in the client & server repositories & set up prisma:
  `cd ./server` && `npm i`

  `cd ./client` && `npm i`

- Add a .env file in ./server for your local postgres, for example:

`DATABASE_URL=postgresql://testuser:testuser@localhost/device-management`

- Generate the prisma schema

`npm run generate`

## Running Locally

- Running the frontend:
  `cd ./client` && `npm run dev`

- Running the backend:
  `cd ./server` && `npm run start`

- Navigate to `localhost:3000`

## Futher Improvements:

- Add validation & better error handling
- Fix dockerisation
- Improve frontend styling
- Add dynamic routes to frontend for device_id path
- Add state management
- Add release date to prisma schema & datepicker on frontend
- Make brand and model mandatory fields
- Tests
