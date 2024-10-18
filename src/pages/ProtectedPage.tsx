import Home from "./Home/Home";
import { useNavigate } from "react-router-dom";

export default function ProtectedPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigate = useNavigate();
  if (!localStorage.getItem("token")) {
    navigate("/login");
  } else {
    return <>{children}</>;
  }
}
