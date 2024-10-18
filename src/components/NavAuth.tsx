import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";

export default function NavAuth() {
  return (
    <>
      <Link to="/login">
        <Badge variant="outline">Log In</Badge>
      </Link>
      <Link to="/register">
        <Badge variant="outline">Register</Badge>
      </Link>
    </>
  );
}
