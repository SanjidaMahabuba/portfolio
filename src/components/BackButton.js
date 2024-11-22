import React from 'react';
import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();

  return (
    <a href="#home" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
  Back to Top
</a>
  );
};

export default BackButton;
