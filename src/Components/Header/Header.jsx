import React, { useEffect } from 'react';
import { withRouter } from 'react-router';

const Header = (props) => {
  const handleClick = () => {
    props.history.push('/');
  }

  useEffect(() => {
      window.scrollTo(0, 0);
  })

  return (
    <div className="header" onClick={() => handleClick()}>
      <div className="title">{props.headerData.title}</div>
      <div className="subtitle">{props.headerData.subtitle}</div>
    </div>
  );
}

export default withRouter(Header);
