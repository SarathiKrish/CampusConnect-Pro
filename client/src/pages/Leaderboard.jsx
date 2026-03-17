import React, { useEffect, useState } from "react";
import API from "../services/api";

function Leaderboard() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {

    const res = await API.get("/users/leaderboard");

    setUsers(res.data);

  };

  return (

    <div>

      <h2>Leaderboard</h2>

      {users.map((user, index) => (

        <div key={user._id}>

          {index + 1}. {user.name} - {user.reputation}

        </div>

      ))}

    </div>

  );

}

export default Leaderboard;