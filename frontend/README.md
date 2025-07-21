#  AR Campaign Tracker

This project simulates a Web-based AR campaign experience using QR scanning. When a user scans the QR code (or opens the AR page), their visit time is tracked and then a YouTube Shorts promotional video is revealed after a brief delay.

---

##  Live Demo

- **Frontend (Vercel)**:  
   https://assiment-4vw2-kd3or7dj5-varsha-kushwahas-projects.vercel.app/ar

- **Backend API (Render)**:  
   https://assiment-a2vf.onrender.com/api/scan

---

##  Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB
- **Deployment:** Vercel (Frontend), Render (Backend)

---

##  Features

-  Tracks time spent on AR page before revealing content
-  Sends time data to backend using Axios
-  Displays YouTube Shorts video only after scan is complete
-  Responsive UI with TailwindCSS
-  Backend logs scan duration via REST API

---

##  Local Setup Instructions

### 1. Clone Repos
```bash
git clone https://github.com/yourname/ar-frontend.git
git clone https://github.com/yourname/ar-backend.git
