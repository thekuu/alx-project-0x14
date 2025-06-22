import React from 'react';
import Button from '../commons/Button';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">MovieApp</h1>
        <nav>
          <Button className="bg-blue-500 hover:bg-blue-600">Login</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;