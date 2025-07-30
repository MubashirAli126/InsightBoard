import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PackagesView from "./pages/PackagesView"; // update path if needed
import Dashboard from "./pages/Dashboard"; // example
import Sidebar from "./components/layout/Sidebar"; // example
import RightPanel from "./components/dashboard/RightPanel";
import MainLayout from "./components/layout/MainLayout";
import './index.css';

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow">
       <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <Dashboard />
              </MainLayout>
            }
          />
          <Route
            path="/packages"
            element={
              <MainLayout>
                <PackagesView />
              </MainLayout>
            }
          />
        </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
