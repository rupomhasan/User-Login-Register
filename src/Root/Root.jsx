import { Outlet } from "react-router-dom";
import Nav from "../Component/Header/navBar/Nav";

const Root = () => {
  return (
    <div>
      <Nav></Nav>
      <div className="flex justify-center mt-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
