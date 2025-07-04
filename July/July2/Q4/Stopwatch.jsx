import React, { useState, useEffect, useRef } from "react";

// Optional: Replace this with a free .mp3 URL or local sound
const soundUrl = "https://www.soundjay.com/button/sounds/beep-07.mp3";

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);
  const soundPlayedRef = useRef(false); // prevent multiple triggers

  // Start/Stop logic
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    // Cleanup on unmount or stop
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  // Sound effect at 10 seconds
  useEffect(() => {
    if (seconds === 10 && !soundPlayedRef.current) {
      soundPlayedRef.current = true;
      const audio = new Audio(soundUrl);
      audio.play().catch(() => {
        console.log("🔔 Sound would play now!");
      });
    }
  }, [seconds]);

  const handleStart = () => {
    if (seconds >= 10) {
      setSeconds(0);
      soundPlayedRef.current = false;
    }
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <div style={styles.container}>
      <h1>Stopwatch</h1>
      <p style={styles.timer}>{seconds}s</p>

      <div style={styles.buttonGroup}>
        <button onClick={handleStart} style={styles.button}>
          Start
        </button>
        <button onClick={handleStop} style={styles.button}>
          Stop
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "300px",
    margin: "40px auto",
    textAlign: "center",
    fontFamily: "Arial",
    padding: "20px",
    backgroundColor: "#f3f3f3",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  timer: {
    fontSize: "2.5rem",
    margin: "20px 0",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    cursor: "pointer",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    color: "white",
  },
};

export default Stopwatch;
