import React from "react";

const Header: React.FC = () => (
  <header className="bg-white shadow p-4 flex justify-between items-center">
    <h1 className="text-xl font-bold">Quyl</h1>
    <input
      type="search"
      placeholder="Search your course"
      className="border rounded-md p-2"
    />
  </header>
);

export default Header;
