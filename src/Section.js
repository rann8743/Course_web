import React from 'react';

const Section = ({ id, title, children }) => {
  return (
    <section className="section">
      <span className="anchor" id={id}></span>
      <h2>{title}</h2>
      <div className="info">{children}</div>
    </section>
  );
}

export default Section;
