# DevOps Beginners Bootcamp

A beginner-friendly DevOps project that showcases a simple Node.js landing page for learning modern cloud and infrastructure concepts. The application presents a DevOps-focused welcome screen and is designed to be used as a starter project for exploring Linux, Docker, CI/CD, cloud computing, and container orchestration.

## Overview

This repository is intended as a hands-on learning project for people starting in DevOps. It includes a small web app, test coverage, Docker configuration, and container orchestration setup so learners can understand how to run, test, and deploy a basic application in a real-world workflow.

The project demonstrates:

- A minimal Node.js web server
- HTML-based landing page content
- Automated testing with Jest and Supertest
- Containerization with Docker
- Multi-service orchestration with Docker Compose
- A clean structure suitable for DevOps bootcamp exercises

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [Docker Setup](#docker-setup)
- [Environment Variables](#environment-variables)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Features

- Simple landing page for a DevOps bootcamp
- Responsive HTML/CSS experience
- Node.js server running on port 3000 by default
- Basic HTTP request validation via automated tests
- Dockerized deployment setup
- Compose-based environment for app, database, and cache services
- Beginner-friendly codebase for learning and experimentation

## Tech Stack

- Node.js
- JavaScript
- HTML/CSS
- Jest
- Supertest
- Docker
- Docker Compose
- PostgreSQL
- Redis

## Project Structure

```text
.
├── Dockerfile
├── README.md
├── docker-compose-install.sh
├── docker-compose.yml
├── docker-install.sh
├── eslint.config.mjs
├── index.js
├── index.test.js
├── package.json
└── package-lock.json
```

### Key files

- `index.js` - Starts the HTTP server and serves the DevOps landing page
- `index.test.js` - Verifies the app returns the expected HTTP response and page content
- `Dockerfile` - Builds the Node.js application container
- `docker-compose.yml` - Defines the app, PostgreSQL, and Redis services
- `package.json` - Project scripts and dependencies

## Prerequisites

Before running this project, make sure you have the following installed:

- Node.js 20+ recommended
- npm
- Docker
- Docker Compose

For local Linux/macOS systems, the repository also includes installation helper scripts:

- `docker-install.sh`
- `docker-compose-install.sh`

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd devops-beginners-projects
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the application

```bash
npm start
```

The application will start on:

```text
http://localhost:3000
```

## Running the Application

### Local development

```bash
npm start
```

### With Docker

```bash
docker build -t devops-beginners-bootcamp .
docker run -p 3000:3000 devops-beginners-bootcamp
```

### With Docker Compose

```bash
docker compose up --build
```

This will bring up the app and supporting services defined in `docker-compose.yml`.

> Note: The Compose setup includes PostgreSQL and Redis. If you use a `.env` file or environment variable for `DB_PASSWORD`, ensure it is defined before starting the services.

## Testing

Run the test suite with:

```bash
npm test
```

The tests validate that:

- the server responds with HTTP 200
- the response includes HTML content
- the page contains the DevOps Bootcamp branding
- the page includes the expected DevOps technology references

## Docker Setup

The Docker configuration is designed to make the app portable and easy to run in a containerized environment.

### Dockerfile

The `Dockerfile` uses the official Node.js Alpine image, copies dependencies, installs them, and starts the app with:

```bash
node index.js
```

### Docker Compose

The `docker-compose.yml` file defines multiple services:

- `app` - the Node.js application
- `database` - PostgreSQL service
- `cache` - Redis cache service

This is useful for learning how containerized applications and supporting infrastructure interact in real deployments.

## Environment Variables

The app uses the following environment variable by default:

- `PORT` - sets the HTTP server port; defaults to `3000`

Compose-related variables include:

- `DB_PASSWORD` - used by the PostgreSQL container configuration
- `NODE_ENV` - set to `development` in the Compose environment
- `DATABASE_URL` - connection string for the Postgres service
- `REDIS_URL` - connection string for the Redis service

Example:

```bash
export PORT=3000
export DB_PASSWORD=your_secure_password
```

## Troubleshooting

### Port already in use

If port 3000 is already occupied, set a different port:

```bash
PORT=4000 npm start
```

### Docker build issues

Make sure Docker is running and the daemon is started. Then retry:

```bash
docker compose up --build
```

### Dependencies not installed

If you see missing module errors, reinstall dependencies:

```bash
rm -rf node_modules package-lock.json
npm install
```

## Contributing

Contributions are welcome. If you want to improve the project:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run the tests
5. Submit a pull request with a clear summary of the update

## License

This project is licensed under the ISC License.

## Project Purpose

This repository is best used as a learning foundation for:

- understanding web app basics
- learning containerization with Docker
- practicing CI/CD workflows
- exploring infrastructure and deployment concepts
- building confidence before moving to larger cloud projects

## Summary

The project gives beginners a simple but practical starting point for learning DevOps fundamentals in a modern environment. It combines a lightweight application, testing, and container tooling in one repository, making it easy to experiment and grow from basic concepts into production-style workflows.
