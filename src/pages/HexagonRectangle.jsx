import React from 'react';

const HexagonRectangle = ({ children }) => {
  return (
    <div className="relative w-64 h-32 bg-blue-500">
      <div className="absolute inset-0" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
        {children}
      </div>
    </div>
  );
};

export default HexagonRectangle;
