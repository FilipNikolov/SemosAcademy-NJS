import React, { useEffect, useState } from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { ChildComponent } from "./components/ChildComponent";
import { ClassComponent } from "./components/ClassComponents";
import { NotFound } from "./components/NotFound";
import { Users } from "./components/Users";

export function App() {
  const [users, setUsers] = useState([]);


  function getUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(json => setUsers(json))
      .catch(err => alert(err))
  }

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <div id="app">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}>
          <Route path="us" element={<ChildComponent />} />
        </Route>
        <Route path="/class-component" element={<ClassComponent />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/users" element={<Users usersList={users} />} />
      </Routes>
    </div>
  )
}