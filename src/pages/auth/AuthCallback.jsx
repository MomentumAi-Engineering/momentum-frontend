import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (code) {
      fetch("https://momentum-backend-p68k.onrender.com/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      })
        .then(res => res.json())
        .then(data => {
          console.log("Google user info:", data);
          localStorage.setItem("token", data.token); // if your backend returns a token
          navigate("/snapfix");
        })
        .catch(err => {
          console.error("Google login failed:", err);
          alert("Login failed");
        });
    }
  }, []);

  return <h2 className="text-white text-center mt-20">Logging in with Google...</h2>;
}
