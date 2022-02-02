import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./Components";
import { Home, Projects, Contact, About } from "./Pages";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="/PROJECTS" element={<Projects />} />
                <Route path="/CONTACT" element={<Contact />} />
                <Route path="/WHOAMI" element={<About />} />
            </Route>
        </Routes>
    );
};

export default App;
