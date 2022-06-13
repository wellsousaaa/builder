import Editor from "pages/editor";
import Feed from "pages/feed";
import MyProjects from "pages/my-projects/MyProjects";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="editor" element={<Editor />} />
        <Route path="my-projects" element={<MyProjects />} />
      </Routes>
    </Router>
  );
}

export default App;
