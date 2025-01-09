import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";

export default function NavAuth() {
  return (
    <div className="flex flex-row justify-center gap-5">
      <Link to="/login">
        <Badge className="bg-blue-500 text-white px-5 py-2 rounded-lg">
          Log In
        </Badge>
      </Link>
      <Link to="/register">
        <Badge className="bg-blue-500 text-white px-5 py-2 rounded-lg">
          Register
        </Badge>
      </Link>
    </div>
  );
}
