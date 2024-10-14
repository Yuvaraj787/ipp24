import React from 'react';
import './Triangles.scss'; // Import the CSS file containing styles for the animation

export default function Triangles() {
  const total = 2000;
  const time = 100;

  const triangles = Array.from({ length: total }, (_, i) => (
    <div className="tri" key={i} style={{ animationDelay: `${i * -(time / total)}s` }}></div>
  ));

  return (
    <div className="wrap">
      {triangles}
    </div>
  );
}
