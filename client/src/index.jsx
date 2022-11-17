import React from "react";
import {render} from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { createRoot } from 'react-dom/client';
import App from "./components/App.jsx";


const container = document.getElementById('app')
const root = createRoot(container);

root.render(<Router>
  <Routes>
    <Route
      path="/*"
      element={<App />}
    />
  </Routes>
</Router>)