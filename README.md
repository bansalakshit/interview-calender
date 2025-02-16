# Interview Calendar API

## Overview
The **Interview Calendar API** is a Nest.js-based application that allows interviewers and candidates to set their availability slots and provides an endpoint to determine common available slots for scheduling interviews.

---

## Installation & Setup

### **1️⃣ Prerequisites**
- [Node.js](https://nodejs.org/) (v18 recommended)
- [Docker](https://www.docker.com/get-started)
- [Swagger](https://swagger.io/docs)

### **2️⃣ Clone the Repository**
```sh
git clone https://github.com/bansalakshit/interview-calender.git
cd interview-calendar
```

### **3️⃣ Install Dependencies**
```sh
npm install
```

### **4️⃣ Run the Application Locally**
```sh
npm run start:dev
```

This will start the Nest.js server on **http://localhost:8001**.

---

## Running with Docker

### **1️⃣ Build the Docker Image**
```sh
docker build -t interview-calendar .
```

### **2️⃣ Run the Docker Container**
```sh
docker run -d -p 8001:8001 interview-calendar
```

The API will now be accessible at **http://localhost:8001**.

---

## Swagger API Documentation

Swagger UI is available to explore the API endpoints easily.

### Access Swagger UI

Once the server is running, open the following URL in your browser:
```sh
http://localhost:8001/api-docs
```

---

## Project Structure
```sh
├── src
│   ├── main.ts
│   ├── app.module.ts
│   ├── app.controller.ts
│   ├── app.service.ts
│   ├── availability
│   │   ├── availability.module.ts
│   │   ├── availability.controller.ts
│   │   ├── availability.service.ts
├── Dockerfile
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.build.json
├── README.md
```
