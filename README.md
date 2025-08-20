# 🎓 Student Registration Application [Backend + Frontend(Angular)]

A Spring Boot REST API **backend** for managing student registration, courses, and student records. 
**frontend application** for managing student records.   
This backend works with a PostgreSQL database and can be connected to  frontend (Angular).  

---

## 🚀 Features:

- **Rest API :**
- REST API for **Student Management**
- Add new students
- Update student details
- Fetch all students
- Delete students
- Handles **CORS** (Cross-Origin Resource Sharing) for frontend integration
- PostgreSQL database integration
- Clean, modular Spring Boot project structure

- **Frontend APP:**
- 🌐 **Navigation Bar** with pages:
- 🏠 Home(With Information) 
- 📚 Courses(With Information)
- 📝 Register (Add Student)  
- 👨‍🎓 Students (Manage Students)  
- ✅ Add new student via registration form  
- ✅ Display all students in a table  
- ✅ Edit student details with inline form (Save / Cancel)  
- ✅ Delete student with confirmation prompt  
- ✅ Search students by name or course  
- ✅ Refresh student list  
- ✅ Responsive design (works on desktop & mobile)  

---

## 🛠️ Tech Stack:

- **Java 17 / 21** (or whichever version you used)
- **Spring Boot** (Web, Data JPA, Validation, DevTools)
- **PostgreSQL**
- **Maven** (build tool)
  
---

## 📂 Project Structure:
- **Backend :**
- student

│── src

│ ├── main

│ │ ├── java

│ │ │ └── com.example.student

│ │ │ ├── config

│ │ │ ├── controller

│ │ │ ├── entity

│ │ │ ├── repository

│ │ │ └── service

│ │ └── resources

│ │ ├── static

│ │ ├── templates

│ │ └── application.properties

│ └── test

│ └── java

│
│── target

│── HELP.md

│── mvnw

│── mvnw.cmd

│── pom.xml

|__README.md

- **Frontend :**


 │──src/

 ├── app/
 
 │   ├── components/
 
 │   │   ├── home/    #homepage
                       
 │   │   │   ├── home.component.ts
 
 │   │   │   ├── home.component.html
 
 │   │   │   └── home.component.css
 
 │   │   ├── courses/                      # CoursesPage
 
 │   │   │   ├── courses.component.ts
 
 │   │   │   ├── courses.component.html
 
 │   │   │   └── courses.component.css
 
 │   │   ├── student-form/                     # Register Student Page
 
 │   │   │   ├── student-form.component.ts
 
 │   │   │   ├── student-form.component.html
 
 │   │   │   └── student-form.component.css
 
 │   │   ├── student-list/                 # Student Management Page
 
 │   │   │   ├── student-list.component.ts
 
 │   │   │   ├── student-list.component.html
 
 │   │   │   ├── student-list.component.css
 
 │   |___services/
           |___student.services.spec.ts
           |___student.services.ts
 │   ├── models/
 
 │   │   └── student.model.ts              
 
 │   ├── app.component.css
 
 │   ├── app.component.html
 
 │   ├── app.component.spec.ts             
 
 │   ├── app.component.ts                  
 
 │   ├── app.config.ts  
 
 │   |___app.routes.ts                  
 
 │                               
 
 ├── main.ts
 
 │
 
 |___index.html
 
 │
 
 └── styles.css                            

---
## ⚙️ How to Run:

**Backend**

```

cd backend
mvn spring-boot:run
Backend runs on: http://localhost:8080

```

**Frontend**

```

cd frontend
ng serve
Frontend runs on: http://localhost:4200

```

## ⚙️ Prerequisites
- Before running backend, make sure you have installed:
- [Java JDK 17+](https://adoptium.net/)  
- [Maven](https://maven.apache.org/)  
- [PostgreSQL](https://www.postgresql.org/) 
 
-Before running this project Frontend, make sure you have installed:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)  
- [Angular CLI](https://angular.dev/cli) (v19 if following latest)

---

## 🔗 API Endpoints (Backend):

- GET /students → Fetch all students

- POST /students → Add a new student

- PUT /students/{id} → Update student

- DELETE /students/{id} → Delete student

----

## 🗄️ Database Setup
- 1. Start PostgreSQL server.  
 - 2. Create a database:

  ```sql

  CREATE DATABASE studentdb;

``````

## 🔧Configuration

In src/main/resources/application.properties update:

```bash
spring.datasource.url=jdbc:postgresql://localhost:5432/studentdb
spring.datasource.username=postgres
spring.datasource.password=shrutu

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
``````

# Enable CORS :

```bash
spring.web.cors.allow-credentials=true
spring.web.cors.allowed-origin-patterns=*
spring.web.cors.allowed-methods=*
spring.web.cors.allowed-headers=*
`````

## 📞Contact:

For any questions or feedback, feel free to reach out:

Your Name : shruti thorat

Email: shrutithorat767@gmail.com

GitHub: (https://github.com/shruti-thorat0715).  

## ScreenShots Of Outputs: 

**1] Homepage :**

<img width="1366" height="768" alt="Screenshot (191)" src="https://github.com/user-attachments/assets/1a7afa96-15d6-4840-81ae-ec6fa7cbbb95" />

**2] Courses page :**

<img width="1366" height="768" alt="Screenshot (192)" src="https://github.com/user-attachments/assets/b09d8d4d-b7ed-4f54-a481-caef2ed61f0d" />

**3] Registration page :**

<img width="1366" height="768" alt="Screenshot (193)" src="https://github.com/user-attachments/assets/b640ba04-e1b4-469b-851e-1ea1663e581f" />

**4] Students List Page :**

<img width="1366" height="768" alt="Screenshot (194)" src="https://github.com/user-attachments/assets/df17fd3f-3e06-4be8-9de6-90841d7e4eab" />

---

## 😊 Thank You

-**Thank you for taking the time to check out this project**  
-**Your feedback,suggestions and contributions are always welcome💡** 

-**If you found this project helpful, don’t forget to ⭐ star the repository ✨**

-**Happy Coding! 🚀**






