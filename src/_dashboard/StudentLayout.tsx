import Sidebar from "@/components/dashboard/Sidebar";
import { Outlet } from "react-router-dom";

const StudentLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-8 w-full h-dvh">
        <Outlet />
      </div>
    </div>
  );
};

export default StudentLayout;
