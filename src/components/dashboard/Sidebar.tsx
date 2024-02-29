import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MenuItem from "./MenuItem";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className=" bg-black h-dvh w-80  flex flex-col text-white ">
      <div className="flex items-center gap-4 p-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="font-bold">Xyz's Dashboard</p>
      </div>

      <div className="flex flex-col">
        <ul>
          <MenuItem linkTo="/">Home</MenuItem>
          <MenuItem
            isSelected={location.pathname === "/dashboard/yourcourses"}
            linkTo="yourcourses"
          >
            Your Courses
          </MenuItem>
          <MenuItem
            isSelected={location.pathname === "/dashboard/explore"}
            linkTo="explore"
          >
            Browse Courses
          </MenuItem>
          <MenuItem linkTo="signout">Signout</MenuItem>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
