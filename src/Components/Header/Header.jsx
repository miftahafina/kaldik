import React, { useEffect } from 'react';

const Header = (props) => {
  const headerData = props.headerData;

  useEffect(() => {
    console.log(headerData);
  });

  return (
    <div className="header">
      <div className="title">{headerData.title}</div>
      <div className="subtitle">{headerData.subtitle}</div>
    </div>
  );
}

export default Header;
