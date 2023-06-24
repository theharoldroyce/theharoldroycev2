import { useState } from 'react'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import {
  HomePage,
  AboutPage,
  ContactPage,
  Experience,
  ProjectPage,
} from "./routes/Routes"


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
