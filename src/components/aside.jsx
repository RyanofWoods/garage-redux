import React from 'react';

const Aside = (props) => {
  return (
    <div className="aside">
      <img className="logo" alt="logo" />
      <h1>{props.garage}</h1>
      <p>Welcome to our garage! </p>
      {props.children}
    </div>
  );
};

export default Aside;
