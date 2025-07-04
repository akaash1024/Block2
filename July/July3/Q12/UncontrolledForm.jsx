import React, { useRef } from 'react';

const UncontrolledForm = () => {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default form reload
    const value = inputRef.current.value;

    if (value.trim()) {
      alert(`You entered: ${value}`);
      inputRef.current.value = ''; // clear input
    } else {
      alert('Please enter something!');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        ref={inputRef}
        placeholder="Enter text"
        style={styles.input}
      />
      <button type="submit" style={styles.button}>Submit</button>
    </form>
  );
};

// Simple styling
const styles = {
  form: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
    marginTop: '40px',
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    width: '250px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
};

export default UncontrolledForm;
