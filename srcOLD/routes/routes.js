import Home from "../components/frontend/Home";
import aboutUs from "../components/frontend/aboutUs";
import Login from "../components/frontend/Login";
import Register from "../components/frontend/Register";
const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/home", exact: true, name: "Home", component: Home },
  { path: "/aboutus", exact: true, name: "aboutUs", component: aboutUs },
  { path: "/login", exact: true, name: "Login", component: Login },
  { path: "/register", exact: true, name: "Register", component: Register },
];

export default routes;
