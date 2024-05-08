import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer, Slide } from 'react-toastify';

import { UserProvider } from "context/user.js"

import Login from "pages/login/index.js";
import Home from "pages/home/index.js";

import "./App.css";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Slide}
        />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
