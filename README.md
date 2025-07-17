
# ✅ ToDo Application

A full-stack To-Do List Web App built using Spring Boot (Java), MySQL, React (Vite), and Tailwind CSS.
This application provides full CRUD operations, optional task descriptions, task completion toggling, and a powerful search feature - all wrapped in a clean, modern UI.

---

## 🚀 Features

- ✅ Create, Read, Update, Delete tasks
- 📝 Optional description for each task
- ✅ Mark tasks as complete/incomplete
- 🔍 Search To-Do items by keyword (title or description)
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
├── todoapp
│   ├── controller
│   ├── model
│   ├── repository
│   └── service
├── todo-frontend
│   ├── components
│   │   ├── TaskForm.jsx
│   │   ├── TaskItem.jsx
│   │   ├── TaskList.jsx
│   │   ├── EditModal.jsx
│   │   └── SearchBar.jsx
│   └── App.jsx
````

---

## 📷 UI Screenshots

<img width="1197" height="827" alt="image" src="https://github.com/user-attachments/assets/0c312db3-c765-4c53-8546-199d98aa7bf7" />
<img width="1162" height="817" alt="image" src="https://github.com/user-attachments/assets/c62b5344-2754-4484-adf8-56d0045e3a30" />

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
