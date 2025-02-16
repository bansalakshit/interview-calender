# Interview Calendar API

## Overview
The **Interview Calendar API** is a Nest.js-based application that allows interviewers and candidates to set their availability slots and provides an endpoint to determine common available slots for scheduling interviews.

---

## Installation & Setup

### **1️⃣ Prerequisites**
- [Node.js](https://nodejs.org/) (v18 recommended)
- [Docker](https://www.docker.com/get-started)

### **2️⃣ Clone the Repository**
```sh
git clone <repository_url>
cd interview-calendar-api
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
docker run -p 8001:8001 interview-calendar
```

The API will now be accessible at **http://localhost:8001**.

---

## Project Structure
```sh
/interview-calendar-api
├── src
│   ├── app.module.ts
│   ├── availability
│   │   ├── availability.module.ts
│   │   ├── availability.controller.ts
│   │   ├── availability.service.ts
├── Dockerfile
├── package.json
├── tsconfig.json
├── README.md
```
