import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Feed from "./pages/Feed";
import Leaderboard from "./pages/Leaderboard";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Feed />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/leaderboard" element={<Leaderboard />} />

      </Routes>

    </BrowserRouter>

  );

}

export default App;