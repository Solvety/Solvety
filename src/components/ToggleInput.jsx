import React from 'react';

const ToggleInput = ({ onChange, checked }) => {
  const styles = {
    label: {
      position: 'relative',
      display: 'inline-block',
      width: '50px', // Decreased width
      height: '20px', // Decreased height
    },
    input: {
      opacity: '0',
      width: '0',
      height: '0',
    },
    span: {
      position: 'absolute',
      cursor: 'pointer',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      background: checked ? 'rgba(127, 86, 217, 1)' : '#a4b3c2',
      transition: '0.3s',
      borderRadius: '10px', // Decreased border radius
    },
    spanBefore: {
      position: 'absolute',
      content: '""',
      height: '16px', 
      width: '16px', 
      left: '0px', 
      bottom: '2px', 
      backgroundColor: '#fff',
      borderRadius: '50%',
      transition: '0.3s',
      transform: checked ? 'translateX(28px)' : 'translateX(0)', // Adjusted translateX
    },
  };

  return (
    <label style={styles.label}>
      <input
        type="checkbox"
        style={styles.input}
        onChange={onChange}
        checked={checked}
      />
      <span style={styles.span}>
        <span style={styles.spanBefore}></span>
      </span>
    </label>
  );
};

export default ToggleInput;
