#  Edemy - Full-Stack Learning Management System (LMS)

**Edemy** is a modern, production-ready Learning Management System (LMS) built with the **MERN stack** (MongoDB, Express, React, Node.js), featuring robust **user authentication via Clerk**, **payment integration using Stripe**, and **cloud-based media management** with Cloudinary. The platform enables educators to create and manage courses, while allowing students to browse, enroll, and track their learning progress in real-time.

---

##  Live Demo

https://edemy-gray.vercel.app/

---

##  Highlights

-  Full-featured LMS with separate interfaces for students and educators
-  User authentication and role-based access via **Clerk**
-  Course purchasing with secure **Stripe Checkout** and real-time **Webhook verification**
-  Video player and lesson tracking system
-  Image/media uploads using **Cloudinary**
-  Course progress tracking, ratings, and analytics
-  Modular React components with responsive design via **Tailwind CSS**
-  Backend REST APIs for user, course, progress, and payment management
-  Deployment-ready on **Vercel** with secure environment variable management

---

## 🛠 Tech Stack

### Frontend

- **React 18** with functional components
- **Tailwind CSS** for responsive, modern UI
- **Clerk** for user authentication (OAuth, email/password)
- **Stripe** for payments (Checkout + Webhooks)
- **Axios** for API communication
- **React Context API** for global state management
- **Toast notifications** for real-time user feedback

### Backend

- **Node.js + Express.js** for RESTful API services
- **MongoDB** with Mongoose for schema-based data models
- **Clerk middleware** for secure route protection
- **Stripe Webhooks** for real-time payment updates
- **Multer** for handling form data uploads
- **Cloudinary** for secure media hosting and delivery
- **Role-based authorization** for educator-only features

---

##  Core Features

### 👨‍🏫 For Educators
- Create and manage courses, chapters, and video lectures
- Upload course thumbnails via Cloudinary
- Track enrollment and earnings
- Secure educator-only access using role-based middleware

### 👨‍🎓 For Students
- Browse/search through courses with filter options
- Purchase and enroll using Stripe Checkout
- Watch lessons and track progress
- Rate and review completed courses

### 🛡️ Authentication & Security
- Seamless sign-up/login with Clerk
- Google and email/password sign-in supported
- Authenticated routes protected by JWT stored in **HTTP-only cookies**

### 💳 Payments with Stripe
- Students securely pay for courses via Stripe Checkout
- Stripe Webhooks confirm and update purchase status
- Admin can manage course pricing and revenue logic

### 📈 Progress & Ratings
- Lesson completion tracking per student
- API endpoints for marking chapters complete
- Rating system with frontend display and backend storage

### ☁️ Media & File Handling
- Upload images and thumbnails using **Multer + Cloudinary**
- Efficient storage and delivery of course content

