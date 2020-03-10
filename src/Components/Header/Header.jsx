import React from 'react';

const Header = (props) => {

  return (
    <div className="header">
      <div className="title">{props.headerData.title}</div>
      <div className="subtitle">{props.headerData.subtitle}</div>
    </div>
  );
}

export default Header;
