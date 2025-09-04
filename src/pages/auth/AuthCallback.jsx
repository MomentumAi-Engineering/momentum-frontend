import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("token", token);
      console.log("Google user token:", token);
      navigate("/snapfix");
    } else {
      alert("Login failed");
      navigate("/");
    }
  }, [navigate]);

  return <h2 className="text-white text-center mt-20">Logging in with Google...</h2>;
}
