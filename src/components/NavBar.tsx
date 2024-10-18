import { Link } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { ModeToggle } from "@/components/mode-toggle";
import NavAuth from "./NavAuth";
import { useAuth } from "@/pages/Auth/AuthProvider";
import DropDown from "./DropDown";

export default function NavBar() {
  const { auth } = useAuth();

  return (
    <nav className="sticky top-0 z-50 mb-5 px-3 pt-2">
      <div className="flex flex-row justify-between">
        <Link to="/">Home</Link>

        <div className="flex flex-row justify-end gap-5">
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
