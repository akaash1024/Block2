import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import UsernameForm from "../Q11/UsernameForm.jsx";
import UncontrolledForm from "../Q12/UncontrolledForm.jsx";
import DynamicEmailForm from "../Q13/DynamicEmailForm.jsx";
import TaskList from "../Q14/TaskList.jsx";
import UserManagement from "../Q15/UserManagement.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UsernameForm />
    <UncontrolledForm />
    <DynamicEmailForm />
    <TaskList />
    <UserManagement />
  </StrictMode>
);
