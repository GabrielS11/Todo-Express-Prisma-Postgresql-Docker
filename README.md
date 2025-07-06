# Todo App with Express.js, Prisma, Docker, and PostgreSQL

A simple Todo application built using Express.js for the backend, Prisma as the ORM, PostgreSQL as the database, and Docker for containerization.

---

## Features

- RESTful API with Express.js  
- Database access with Prisma ORM  
- PostgreSQL database inside Docker container  
- Easy setup and deployment with Docker Compose

---

## Requirements

- Docker & Docker Compose installed  
- Node.js (for local development if not using Docker)

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/GabrielS11/Todo-Express-Prisma-Postgresql-Docker.git
cd Todo-Express-Prisma-Postgresql-Docker
```

##2. Generate Prisma Client
```bash
npx prisma generate
```
##3. Start Docker containers
```bash
docker compose up
```
The app will be available at http://localhost:5000.

---

## Notes
-The PostgreSQL database is created and managed inside the Docker container automatically.

-Prisma migrations and client generation should be done on your host machine before running the Docker containers.

-If you change your Prisma schema, remember to run npx prisma generate again.

---
## Stopping the app
```bash
docker compose down
```
