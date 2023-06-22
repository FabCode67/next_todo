import React from 'react'

const Footer = () => {
  return (
    <footer className='b-0 mt'>
      <p className="text-sm text-gray-500 flex justify-center space-x-3">
        &copy; {new Date().getFullYear()}{" "}
        <span>mwanafunzifabrice@gmail.com.</span>{" "}
        <span>All rights reserved.</span>
      </p>
    </footer>
  );
};


export default Footer