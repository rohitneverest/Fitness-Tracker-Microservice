# 🏋️ AI Fitness Tracker

An AI-powered Fitness Tracker built using **Spring Boot Microservices**, **React**, **Keycloak OAuth2**, **RabbitMQ**, **MongoDB**, **MySQL**, and **Large Language Models (LLMs)** to provide personalized fitness recommendations.

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
