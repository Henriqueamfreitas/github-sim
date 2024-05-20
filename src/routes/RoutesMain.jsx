import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage"
import { HomePage } from "../pages/HomePage";
import { UserProvider } from "../providers/UserContext";

export const RoutesMain = () => {

   return (
      <UserProvider>
         <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/home" element={<HomePage />} />
         </Routes>
      </UserProvider>
   );
};