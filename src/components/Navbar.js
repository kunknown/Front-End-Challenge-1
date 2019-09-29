import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="container">
      <div>
        <Link to="/">My Blog</Link>
      </div>
    </nav>
  )
}
