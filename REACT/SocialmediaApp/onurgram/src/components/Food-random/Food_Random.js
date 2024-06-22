import React, { useEffect, useState } from 'react';

export default function Food_Random() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const randomRotation = Math.floor(Math.random() * 5 + 3) * 360 + Math.random() * 360;
    setRotation(randomRotation);
  }, []);

  return (
    <div className='size-[800px]'>
      <div>
        <div id='wheel' className='h-[800px] border-8 border-white rounded-full ease-in-out' style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 7s' }}>
          <h1>hello</h1>
        </div>
      </div>
    </div>
  );
}