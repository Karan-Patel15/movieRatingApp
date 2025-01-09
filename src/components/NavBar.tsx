import { Link } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { ModeToggle } from "@/components/mode-toggle";
import NavAuth from "./NavAuth";
import { useAuth } from "@/pages/Auth/AuthProvider";
import DropDown from "./DropDown";

export default function NavBar() {
  const { auth } = useAuth();

  return (
    <nav className="sticky top-0 mb-5 px-3 pt-0 pl-0 w-screen h-14 bg-slate-800">
      <div className="flex flex-row justify-between items-center h-full">
        <Link to="/" className="">
          <h1 className="pl-2">ScreenCritic</h1>
        </Link>

        <div className="flex flex-row justify-end gap-5 items-center pr-2">
          <ModeToggle />
          {auth || localStorage.getItem("token") ? (
            <>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
              </Avatar>
              <DropDown />
            </>
          ) : (
            <NavAuth />
          )}
        </div>
      </div>
    </nav>
  );
}
