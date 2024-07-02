import { useState } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Mylist from "./pages/mylist/Mylist";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { productInputs, userInputs } from "./formsource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import { userColumns, productColumns } from "./datatablesource";

function App() {
  const {darkMode} = useContext(DarkModeContext);

  const {currentUser} = useContext(AuthContext);

  const RequireAuth = ({children}) => {
    return currentUser ? children : <Navigate to = "/login" />;
  };

  const NotRequireAuth = ({children}) => {
    return currentUser ? <Navigate to = "/login" /> : children;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="users">
              <Route index element={<RequireAuth><List columns={userColumns} /></RequireAuth>}></Route>
              <Route path=":userId" element={<RequireAuth><Single columns={userColumns} /></RequireAuth>}></Route>
              <Route 
              path="new" 
              element={<New inputs={userInputs} title="Add New User" />}></Route>
            </Route>
            <Route path="products">
              <Route index element={<RequireAuth><List columns={productColumns} /></RequireAuth>}></Route>
              <Route path=":productId" element={<RequireAuth><Single columns={productColumns} /></RequireAuth>}></Route>
              <Route 
              path="new" 
              element={<New inputs={productInputs} title="Add New Product" />}></Route>
            </Route>
            <Route path="mylist" element={<Mylist />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
