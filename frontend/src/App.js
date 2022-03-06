import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { UserAuth } from "./components/user-auth";
import { UserForm } from "./components/user-form";
import { UsersList } from "./components/user-list";
import { UserDetails } from "./components/user-details";
import { useSelector } from "react-redux";
import { SessionInfo } from "./components/session-info";

function App() {
  const userState = useSelector((state) => {
    return state.session;
  });
  return (
    <div className="App">
      <header className="App-header">
        <h1>FLUXBOOK</h1>
        {userState.isLogged ? <SessionInfo /> : ""}
      </header>
      <hr />
      <main>
        <Routes>
          <Route path="/login" element={<UserAuth />} />
          <Route path="/register" element={<UserForm />} />
          <Route path="/update" element={<UserForm />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="*" element={<UserAuth />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
