import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import Contact from './components/Contact';
import Project from './components/Project';

import Project1 from "./components/Project/Project1";

// ! The flow for nested routing should be made dynamic
// ! instead of hardcoded
// TODO: fix that 

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects">
            <Route index element={<Project />} />
            <Route path='project1' element={<Project1 />} /> {/*A nested route!*/}
          </Route>
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

// export default App