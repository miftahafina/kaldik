import React, { useEffect, useContext } from 'react';
import HeaderContext from '../../Context/HeaderContext';

const Header = (props) => {
  const headerData = useContext(HeaderContext);

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
