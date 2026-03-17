CampusConnect
A Campus Social Platform for Students to Share Ideas, Ask Questions, and Collaborate.
Features
1 Secure Authentication (JWT)
2 Create & Share Posts
3 Upvote / Downvote System
4 Comment System
5 Reputation Points
6 Leaderboard for Top Contributors
7 User Profile Statistics
8 Notification System
9 Post Reporting System
10 Admin Moderation Tools
Tech Stack
1 Backend: Node.js, Express.js, MongoDB, Mongoose, JWT Authentication
2 Frontend: React (Vite), Axios, React Router
3 Database: MongoDB
Installation
1 Clone repository: git clone https://github.com/SarathiKrish/CampusConnect-Pro.git
2 Install backend dependencies: cd server && npm install
3 Create .env file with MONGO_URI and JWT_SECRET
4 Run backend: npx nodemon server.js
5 Install frontend dependencies: cd client && npm install
6 Run frontend: npm run dev
Main API Endpoints
1 POST /api/auth/register
2 POST /api/auth/login
3 POST /api/posts
4 GET /api/posts
5 POST /api/posts/:id/upvote
6 POST /api/posts/:id/downvote
7 POST /api/posts/:id/comment
8 GET /api/posts/:id/comments
9 GET /api/users/profile
10 GET /api/users/leaderboard
11 GET /api/notifications
12 PUT /api/notifications/:id/read
Reputation System
1 Post Upvote: +5 points
2 Post Downvote: -2 points
3 Comment Contribution: +1 point
Author
Sarathi K - GitHub: https://github.com/SarathiKrish
