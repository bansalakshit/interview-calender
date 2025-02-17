
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
**http://localhost:8001/api-docs**

---

## Project Structure
```sh
├── src
│   ├── main.ts
│   ├── app.module.ts
│   ├── app.controller.ts
│   ├── app.service.ts
│   ├── availability
│   │   ├── dto
│   │   │   ├── availability.dto.ts
│   │   ├── availability.module.ts
│   │   ├── availability.controller.ts
│   │   ├── availability.service.ts
│   ├── helper
│   │   ├── constant.ts
├── Dockerfile
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.build.json
├── README.md
```

---

## API Endpoints

### **Set Availability**

#### `POST /availability/:role/:day/:userId`

Set availability for a Candidate or Interviewer.

- **Path Parameters:**
  - `role`: Role of the user (either `CANDIDATE` or `INTERVIEWER`)
  - `day`: Day for which the availability is being set (must be one of `Monday`, `Tuesday`, `Wednesday`, etc.)
  - `userId`: Unique ID of the candidate or interviewer

- **Request Body:**
```json
{
  "name": "Interviewer",
  "startHour": 10,
  "endHour": 14
}
```

- **Response:**
```json
{
  "role": "INTERVIEWER",
  "day": "Monday",
  "name": "Interviewer",
  "userId": 1,
  "startHour": 10,
  "endHour": 14
}
```
  
- **Request Body:**
```json
{
  "name": "Akshit",
  "startHour": 12,
  "endHour": 15
}
```

- **Response:**
```json
{
  "role": "CANDIDATE",
  "day": "Monday",
  "name": "Akshit",
  "userId": 2,
  "startHour": 12,
  "endHour": 15
}
```

---

### **Get All Availabilities**

#### `GET /availability/all`

Get the availability details of all candidates and interviewers.

- **Response:**
```json
[
  {
    "role": "CANDIDATE",
    "day": "Monday",
    "name": "Akshit",
    "userId": 2,
    "startHour": 12,
    "endHour": 15
  },
  {
    "role": "INTERVIEWER",
    "day": "Monday",
    "name": "Interviewer",
    "userId": 1,
    "startHour": 10,
    "endHour": 14
  }
]
```

---

### **Get Common Slots**

#### `GET /availability/common-slots?candidateId=<candidateId>`

Get common available slots between a candidate and interviewers.

- **Query Parameters:**
  - `candidateId`: The ID of the candidate for whom you want to check availability.

- **Response:**
```json
[
  {
    "day": "Monday",
    "timeSlots": [
      "12 - 1 PM",
      "1 - 2 PM"
    ]
  }
]
```
