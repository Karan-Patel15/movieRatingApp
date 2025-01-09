import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { logOut } from "../pages/Auth/AuthHelper";
import { useAuth } from "../pages/Auth/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function DropDown() {
  const Navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  console.log(auth);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-white">
        {auth ? localStorage.getItem("user") : "Account"}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            logOut();
            setAuth(false);
            Navigate("/");
          }}
        >
          Log Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
