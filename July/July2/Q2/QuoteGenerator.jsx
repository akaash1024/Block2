import React, { useState, useEffect } from "react";

const QuoteGenerator = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch quote from API
  const fetchQuote = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();
      setQuote(data);
    } catch (err) {
      console.error("Failed to fetch quote:", err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch on mount and every 30 seconds
  useEffect(() => {
    fetchQuote(); // initial load
    const intervalId = setInterval(fetchQuote, 30000);

    // Clean up interval
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={styles.container}>
      <h1>Daily Quote Generator</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div style={styles.quoteBox}>
          <p style={styles.content}>"{quote.content}"</p>
          <p style={styles.author}>— {quote.author}</p>
        </div>
      )}

      <button onClick={fetchQuote} style={styles.button}>
        Get New Quote
      </button>
    </div>
  );
};


const styles = {
  container: {
    padding: "20px",
    maxWidth: "500px",
    margin: "40px auto",
    textAlign: "center",
    fontFamily: "sans-serif",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  quoteBox: {
    marginBottom: "20px",
  },
  content: {
    fontSize: "1.2em",
    fontStyle: "italic",
    color: "#333",
  },
  author: {
    marginTop: "10px",
    fontWeight: "bold",
    color: "#555",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1em",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
  },
};

export default QuoteGenerator;
