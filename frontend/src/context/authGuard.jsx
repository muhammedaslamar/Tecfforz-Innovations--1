import { Navigate } from "react-router-dom";

export function RequireAuth({ children }) {
  const authed = localStorage.getItem("user") ? true : false;

  return authed === true ? children : <Navigate to="/login" replace />;
}
