# 🏋️ AI Fitness Tracker

An AI-powered Fitness Tracker built using **Spring Boot Microservices**, **React**, **Keycloak OAuth2**, **RabbitMQ**, **MongoDB**, **MySQL**, and **Large Language Models (LLMs)** to provide personalized fitness recommendations.

<img width="1920" height="1007" alt="Screenshot (202)" src="https://github.com/user-attachments/assets/3a40504c-8753-4a37-ac44-d96af80bba40" />

<img width="1920" height="889" alt="Screenshot (198)" src="https://github.com/user-attachments/assets/695b614c-4861-466c-b753-d0650495271a" />

<img width="1920" height="908" alt="Screenshot (199)" src="https://github.com/user-attachments/assets/2570261a-794f-4aa1-983f-2c0fd81f826a" />

<img width="1920" height="901" alt="Screenshot (200)" src="https://github.com/user-attachments/assets/73e44e1b-a301-40ac-8f98-828025f4d4bd" />

<img width="1920" height="897" alt="Screenshot (201)" src="https://github.com/user-attachments/assets/aafefcc0-bf68-44d3-b0b8-afd21c7bd7de" />













---

## 🚀 Features

### Authentication & Security
- Secure OAuth2/OpenID Connect authentication using Keycloak
- JWT-based authorization
- Role-based protected APIs
- Secure API Gateway

### User Management
- User profile management
- Update personal fitness information
- Fitness goal tracking

### Activity Tracking
- Add workout activities
- Edit activities
- Delete activities
- View activity history
- Search activities

### Water Tracking
- Track daily water intake
- View hydration history

### AI Recommendations
- Personalized workout recommendations
- AI-generated fitness insights
- Recommendation engine powered by Large Language Models (LLMs)

### Dashboard
- Workout summary
- Activity overview
- User profile
- Dark / Light mode
- Responsive UI

---

# 🏗️ Microservices Architecture

```
         soon to be uploaded here
```

---

# 🛠️ Tech Stack

## Backend

- Java 21
- Spring Boot
- Spring Security
- Spring Cloud Gateway
- Spring Cloud Config
- Spring Cloud Netflix Eureka
- Spring Data JPA
- Spring Data MongoDB
- RabbitMQ
- Maven

---

## Frontend

- React
- TypeScript
- Tailwind CSS
- React Query
- React Router
- Axios
- Lucide React

---

## Database

- MySQL
- MongoDB

---

## Authentication

- Keycloak
- OAuth2
- OpenID Connect
- JWT

---

## AI

- LLM-based Recommendation Engine

---

# 📂 Project Structure

```
AI-Fitness-Tracker

├── ConfigServer
├── EurekaServer
├── Gateway
├── UserService
├── ActivityService
├── AIService
├── WaterService
└── Frontend (React)
```

---

# ⚙️ Services

| Service | Port |
|----------|------|
| Config Server | 8888 |
| Eureka Server | 8761 |
| Gateway | 8765 |
| User Service | 8082 |
| Activity Service | 8083 |
| AI Service | 8084 |
| Water Service | 8085 |
| Keycloak | 8181 |

---

# 🔐 Authentication Flow

```
User
   │
   ▼
React Frontend
   │
   ▼
Keycloak Login
   │
   ▼
JWT Token
   │
   ▼
API Gateway
   │
   ▼
Microservices
```

---

# 📦 Installation

## Clone Repository

```bash
git clone https://github.com/<your-username>/AI-Fitness-Tracker.git
```

---

## Backend

Run the services in the following order:

1. Config Server
2. Eureka Server
3. Keycloak
4. Gateway
5. User Service
6. Activity Service
7. AI Service
8. Water Service

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# 🔧 Configuration

The project uses **Spring Cloud Config Server**.

Configuration files are stored externally for different environments.

Example:

```
userservice-dev.properties
userservice-prod.properties

activityservice-dev.properties
activityservice-prod.properties

gateway-dev.properties
gateway-prod.properties
```

---

# 🌐 API Gateway Routes

| Route | Service |
|---------|----------|
| /api/users/** | User Service |
| /api/activities/** | Activity Service |
| /api/recommendations/** | AI Service |
| /api/water/** | Water Service |

---

# 📷 Screenshots

> Add screenshots of your application here.

Example:

```
Dashboard

Activities

Profile

Recommendations
```

---

# 🚀 Deployment

Frontend

- AWS Amplify (planned)

Backend

- AWS EC2
- Spring Boot JAR deployment

Databases

- MySQL
- MongoDB

Authentication

- Keycloak

---

# 🔮 Future Enhancements

- Food calorie tracking
- Sleep tracking
- Wearable device integration
- Email notifications
- Push notifications
- Weekly analytics
- AI meal planning
- Goal progress charts
- Admin dashboard
- Docker & Kubernetes deployment

---

# 👨‍💻 Author

**Rohit Sharma**

Full Stack Java Developer

---

# 📄 License

This project is licensed under the MIT License.
