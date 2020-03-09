import React from 'react';

const HeaderContext = React.createContext({
  title      : 'Title Sample',
  subtitle   : 'Subtitle Sample',
  setTitle   : () => {},
  setSubtitle: () => {}
});

export const HeaderProvider = HeaderContext.Provider;
export const HeaderConsumer = HeaderContext.Consumer;
export default HeaderContext;
