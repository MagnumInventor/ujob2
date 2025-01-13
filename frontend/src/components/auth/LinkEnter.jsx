import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Головна сторінка</h1>
      <Link to="/register" className="btn btn-primary">
        Почати
      </Link>
    </div>
  );
}

export default Home;
