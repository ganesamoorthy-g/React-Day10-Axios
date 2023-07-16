import "./index.css";
import React,{ useState } from "react";
import UserList from "./Components/UserList";
import { BrowserRouter as Router, Routes, Route}  from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";


export default function App() {

  let [users, setUsers] = useState();

  return (
    <Router>
    <div className="App">
    <NavBar />
        <Routes>
        <Route path="/home" element={<Home />} />
        <Route
            path="/Userslist"
            element={<UserList users={users} setUsers={setUsers} />}
          />
          <Route path="/addusers" element={<UserList users={users} setUsers={setUsers} />} />
          <Route path="/edit-users/:id" element={<UserList users={users} setUsers={setUsers} />} />
        </Routes>
      </div>
    </Router>
  );
}