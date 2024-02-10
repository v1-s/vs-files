// QtyInput.jsx
import React from 'react';

const QtyInput = ({ value, onChange }) => {
  return (
    <div className="quantity-input">
      <button onClick={() => onChange({ target: { value: value - 1 } })}>
        -
      </button>
      <input type="number" value={value} onChange={onChange} min={1} />
      <button onClick={() => onChange({ target: { value: value + 1 } })}>
        +
      </button>
    </div>
  );
};

export default QtyInput;