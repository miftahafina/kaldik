import React from 'react';

const HeaderContext = React.createContext({
  title      : 'Context Title Sample',
  subtitle   : 'Context Subtitle Sample',
  setTitle   : () => {},
  setSubtitle: () => {}
});

export const HeaderProvider = HeaderContext.Provider;
export const HeaderConsumer = HeaderContext.Consumer;
export default HeaderContext;
