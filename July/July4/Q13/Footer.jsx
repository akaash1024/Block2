import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";

function Footer() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <footer
      style={{
        marginTop: "40px",
        borderTop: "1px solid #ccc",
        paddingTop: "10px",
      }}
    >
      <p>{isLoggedIn ? "Welcome, User" : "Please log in"}</p>
    </footer>
  );
}

export default Footer;
