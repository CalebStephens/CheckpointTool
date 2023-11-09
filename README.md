# CheckpointTool

A full-stack application that records lab completion for students within a class. It includes both a student and admin frontend and an API that manipulates and stores data.

## Technologies

- Next.js
- Tailwind CSS
- JavaScript
- Express
- Prisma
- Render

## Getting Started

Explain how to get started with your project. This section can include:

### Installation

```bash
$ git clone https://github.com/yourusername/your-repo.git
$ cd CheckpointTool
```

Frontend:
```bash
$ cd checkpoint-tool
$ npm install
```

Backend:
```bash
$ cd CheckpointTool
$ cd checkpoint-tool
$ cd backend
$ npm install
```
#### Add `.env` file to Backend directory
```
PORT=3000

JWT_SECRET=Pazzw0rd123
JWT_LIFETIME=1hr

DATABASE_URL= //this will be your render database or equivilent
```

### Run locally
Backend:
(in Backend directory)
```
npm run start
```
- This will run on localhost:3000

Frontend (run after Backend):
(in checkpoint-tool directory)
```
npm run dev
```
- This will run on localhost:3001

### Navigate to Pages (Frontend)

Student Side
```
/student/home
```

Admin Side
```
/
```

- Login Details
  Username: `Admin`
  Password: `test`
