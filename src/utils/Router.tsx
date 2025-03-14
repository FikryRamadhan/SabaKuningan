import Home from "../pages/Home.tsx";
import Login from "../pages/Login.tsx";

const Routers = [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/login',
      element: <Login />,
    },
  ];
  
  export default Routers;
  