
# ✅ ToDo Application

A full-stack **ToDo Web App** developed using **Spring Boot (Java)** for the backend and **React with Vite + Tailwind CSS** for the frontend. It allows users to manage tasks with full **CRUD functionality**, including optional descriptions.

---

## 🚀 Features

- ✅ Create, Read, Update, Delete tasks
- 📝 Optional description for each task
- ✅ Mark tasks as complete/incomplete
- 🎨 Beautiful UI with Tailwind CSS
- 🔄 REST API built with Spring Boot
- 🧪 API tested using Postman

---

## 🛠️ Technologies Used

### 🔧 Backend:
- Java 17
- Spring Boot 3.5.3
- Spring Web
- Spring Data JPA
- MySQL
- Lombok
- Maven

### 🌐 Frontend:
- React (with Vite)
- Tailwind CSS
- Axios

### 🧪 Testing:
- Postman (for API testing)

---

## 🗂️ Project Structure

```
todoapp/
├── backend/
│   ├── model/
│   ├── controller/
│   ├── repository/
│   ├── service/
│   ├── application.properties
│   └── TodoAppApplication.java
├── frontend/
│   ├── src/
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── vite.config.js
```

---

## 📷 UI Screenshots

<img width="1501" height="855" alt="image" src="https://github.com/user-attachments/assets/21f9d422-23a8-4f0a-9062-258636ad8ada" />
<img width="1347" height="788" alt="image" src="https://github.com/user-attachments/assets/3cdcff58-7265-4393-80f2-ab8a1e7fd1a3" />

---

## 🔁 Postman API Testing

Below are the steps and screenshots for testing this app using **Postman**.

### 📍 Step 1: `GET` All Tasks

```
GET http://localhost:8080/api/tasks
```

<img width="1751" height="807" alt="image" src="https://github.com/user-attachments/assets/139bdcd5-f979-464c-876c-bbde72854659" />

---

### 📍 Step 2: `POST` Create Task

```
POST http://localhost:8080/api/tasks
```

<img width="1757" height="657" alt="image" src="https://github.com/user-attachments/assets/b6742249-4c6e-4484-9931-ed8145aabaa3" />

---

### 📍 Step 3: `PUT` Update Task

```
PUT http://localhost:8080/api/tasks/{id}
```

<img width="1267" height="647" alt="image" src="https://github.com/user-attachments/assets/d3398f4b-5716-42cc-be3d-5372e6daf344" />

---

### 📍 Step 4: `DELETE` Task

```
DELETE http://localhost:8080/api/tasks/{id}
```

<img width="1761" height="550" alt="image" src="https://github.com/user-attachments/assets/16184605-e68f-475d-8b41-0d80f92ed0cb" />

---

## ⚙️ Run the Application

### 📌 1. Start MySQL (via XAMPP or local)

- Create a database named: `todo_db`

### 📌 2. Run Backend (Spring Boot)

```bash
cd todoapp
./mvnw spring-boot:run
```

### 📌 3. Run Frontend (React + Vite)

```bash
cd todo-frontend
npm install
npm run dev
```

---

## 🌍 Project URLs

| Part      | URL                        |
|-----------|----------------------------|
| Backend API | `http://localhost:8080/api/tasks` |
| Frontend UI | `http://localhost:5173/`           |

---

## 📎 Author

**Pramuditha Bandara**  

📧 Email: pramudithakavinda01@gmail.com  
📱 Mobile: 0768001685

---
