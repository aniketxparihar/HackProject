import React from "react";
import { Routes as RoutesContainer, Route } from "react-router-dom";
import App from "./App";
import AuthRoute from "./Components/AuthRoute/AuthRoute";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home"
import Notes from "./Pages/Notes/Notes";
import Projects from "./Pages/Projects/Projects";
import Search from "./Pages/Search/Search";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Todo from "./Pages/Todo/Todo";
const Routes = () => {
  return (
    <RoutesContainer>
      <Route path="/" element={<App />}>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />}>
            <Route path="/notes" element={<Notes />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/search" element={<Search />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/todo" element={<Todo />} />
          </Route>
        </Route>
        <Route element={<AuthRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Route>
    </RoutesContainer>
  );
};

export default Routes;