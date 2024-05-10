import React, { useState } from 'react';
import QRCode from 'react-qr-code';

const QRCodeGenerator = () => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Enter text for QR Code"
      />
      {text && (
        <div className=' relative left-[500px]'>
          <QRCode value={text} />
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;