import React, { useState } from 'react';

const DynamicEmailForm = () => {
  const [emails, setEmails] = useState([{ value: '', isValid: true }]);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Handle input change
  const handleEmailChange = (index, newValue) => {
    const updatedEmails = [...emails];
    updatedEmails[index].value = newValue;
    updatedEmails[index].isValid = emailRegex.test(newValue) || newValue === '';
    setEmails(updatedEmails);
  };

  // Add new email field
  const handleAddEmail = () => {
    setEmails([...emails, { value: '', isValid: true }]);
  };

  return (
    <div style={styles.container}>
      <h2>Dynamic Email Form</h2>

      {emails.map((emailObj, index) => (
        <div key={index} style={styles.inputGroup}>
          <input
            type="email"
            placeholder={`Email ${index + 1}`}
            value={emailObj.value}
            onChange={(e) => handleEmailChange(index, e.target.value)}
            style={{
              ...styles.input,
              borderColor: emailObj.isValid ? '#ccc' : 'red',
            }}
          />
          {!emailObj.isValid && (
            <span style={styles.errorText}>Invalid email format</span>
          )}
        </div>
      ))}

      <button onClick={handleAddEmail} style={styles.button}>
        Add Email
      </button>

      <div style={styles.result}>
        <h3>Entered Emails:</h3>
        <ul>
          {emails.map((email, i) => (
            <li key={i}>
              {email.value || '(empty)'}{' '}
              {!email.isValid && <span style={{ color: 'red' }}>(Invalid)</span>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Inline styling
const styles = {
  container: {
    maxWidth: '500px',
    margin: '40px auto',
    padding: '20px',
    fontFamily: 'Arial',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  input: {
    padding: '10px',
    width: '100%',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '10px 16px',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  errorText: {
    fontSize: '0.9em',
    color: 'red',
    marginTop: '4px',
    display: 'block',
  },
  result: {
    marginTop: '30px',
  },
};

export default DynamicEmailForm;
