import { useState } from 'react';

const ModernInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    // Add your validation logic here
    const isValidInput = value.trim() !== '';
    setIsValid(isValidInput);
  };

  return (
    <div>
      <label htmlFor="inputField">Enter something:</label>
      <div style={{ display: 'flex' }}>
        <input
          type="text"
          id="inputField"
          value={inputValue}
          onChange={handleInputChange}
          style={{
            borderColor: isValid ? 'green' : 'red',
            textAlign: 'center',
            width: '100%',
          }}
          placeholder="Starts at the middle"
        />
      </div>
      {!isValid && <p style={{ color: 'red' }}>Input cannot be empty!</p>}
    </div>
  );
};

export default ModernInput;
