# 🎓 CampusConnect-Pro

> A full-stack campus networking platform that connects students, fosters collaboration, and builds a vibrant academic community.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-89.8%25-yellow)
![Status](https://img.shields.io/badge/status-active-brightgreen)

---

## 📌 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

---

## 🌐 Overview

**CampusConnect-Pro** is a centralized platform where students can connect with peers, share posts and updates, view profiles, and track activities and rankings. Built with a scalable client-server architecture, it demonstrates real-world full-stack development skills.

---

## ✨ Features

- 🔗 **Student Networking** — Connect and follow peers across your campus
- 📝 **Posts & Updates** — Share content, announcements, and academic updates
- 👤 **User Profiles** — View and manage personal academic profiles
- 🏆 **Activity Tracking** — Monitor engagement and leaderboard rankings
- 🔒 **Authentication** — Secure login and session management
- 📱 **Responsive UI** — Works seamlessly across devices

---

## 🛠 Tech Stack

| Layer      | Technology            |
|------------|----------------------|
| Frontend   | JavaScript, HTML, CSS |
| Backend    | Node.js / Express    |
| Database   | <!-- e.g. MongoDB / MySQL --> |
| Auth       | <!-- e.g. JWT / Sessions --> |

---

## 📁 Project Structure

```
CampusConnect-Pro/
├── client/          # Frontend source files
│   ├── src/
│   └── public/
├── server/          # Backend API
│   ├── routes/
│   ├── models/
│   └── controllers/
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16+
- npm or yarn
- <!-- Add any other prerequisites e.g. MongoDB -->

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SarathiKrish/CampusConnect-Pro.git
   cd CampusConnect-Pro
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Set up environment variables** (see [below](#environment-variables))

5. **Run the application**
   ```bash
   # In the server directory
   npm start

   # In the client directory (new terminal)
   npm start
   ```

6. Open your browser at `http://localhost:3000`

---

## 🔐 Environment Variables

Create a `.env` file in the `server/` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLIENT_URL=http://localhost:3000
```

> ⚠️ Never commit your `.env` file. Add it to `.gitignore`.

---

## 📜 Scripts

| Command         | Description                     |
|-----------------|---------------------------------|
| `npm start`     | Start the server / client       |
| `npm run dev`   | Start in development/watch mode |
| `npm test`      | Run tests                       |
| `npm run build` | Build the client for production |

---

## 📸 Screenshots

<!-- Add screenshots here -->
> Coming soon — add UI screenshots of the feed, profile, and leaderboard pages.

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the project
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Sarathi Krish**

- GitHub: [@SarathiKrish](https://github.com/SarathiKrish)

---
