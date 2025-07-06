Todo App
A simple task management (ToDo) application built with Express.js, Prisma, PostgreSQL, and Docker.

Technologies Used
Express.js: Web framework for Node.js to build the REST API.

Prisma: Modern ORM to interact with the PostgreSQL database.

PostgreSQL: Relational database for storing tasks.

Docker: For containerizing the app and database, making development environment easier.

Features
Create, read, update, and delete tasks (CRUD).

Data persistence with PostgreSQL.

Isolated development environment with Docker.

Prerequisites
Docker installed

Node.js installed (if running locally without Docker)

How to Run
Using Docker
Clone this repository:

bash
Copiar
Editar
git clone https://github.com/your-username/your-repository.git
cd your-repository
Generate the Prisma client (if you modify the schema):

bash
Copiar
Editar
npx prisma generate
Start the Docker containers (app + database):

bash
Copiar
Editar
docker compose up --build
The app will be running at http://localhost:5000

Running Locally (without Docker)
Install dependencies:

bash
Copiar
Editar
npm install
Configure the .env file with your PostgreSQL connection string:

ini
Copiar
Editar
DATABASE_URL=postgresql://user:password@localhost:5432/database_name
JWT_SECRET=your_secret_key
PORT=5000
Generate the Prisma client:

bash
Copiar
Editar
npx prisma generate
Start the app:

bash
Copiar
Editar
npm run dev
Access the API at http://localhost:5000

Project Structure
/prisma — Prisma schema and migration files.

/src — Express app source code.

docker-compose.yml — Docker configuration file.

Useful Prisma Commands
Create migrations and update the database:

bash
Copiar
Editar
npx prisma migrate dev --name init
Open Prisma Studio (database GUI):

bash
Copiar
Editar
npx prisma studio
Contributing
Feel free to open issues and pull requests!

License
This project is licensed under the MIT License.
