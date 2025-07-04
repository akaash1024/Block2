import React, { useState } from "react";
import ReactDOM from "react-dom/client";

export function App() {
  const [activePage, setActivePage] = useState("home");

  const styles = {
    home: { backgroundColor: "#e3f2fd", padding: "20px" },
    about: { backgroundColor: "#fff3e0", padding: "20px" },
    contact: { backgroundColor: "#fce4ec", padding: "20px" },
    nav: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      marginBottom: "20px",
      cursor: "pointer",
      fontWeight: "bold",
    },
    link: {
      textDecoration: "underline",
      color: "blue",
    },
  };

  const renderContent = () => {
    switch (activePage) {
      case "home":
        return (
          <div style={styles.home}>
            <h2>Welcome to Home</h2>
          </div>
        );
      case "about":
        return (
          <div style={styles.about}>
            <h2>About Us</h2>
          </div>
        );
      case "contact":
        return (
          <div style={styles.contact}>
            <h2>Contact Us</h2>
          </div>
        );
      default:
        return (
          <div>
            <h2>Page Not Found</h2>
          </div>
        );
    }
  };

  return (
    <div>
      <nav style={styles.nav}>
        <span style={styles.link} onClick={() => setActivePage("home")}>
          Home
        </span>
        <span style={styles.link} onClick={() => setActivePage("about")}>
          About
        </span>
        <span style={styles.link} onClick={() => setActivePage("contact")}>
          Contact
        </span>
      </nav>
      {renderContent()}
    </div>
  );
}
