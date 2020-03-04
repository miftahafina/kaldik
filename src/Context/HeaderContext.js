import React from 'react';

const HeaderContext = React.createContext({
  title: 'Context Title',
  subtitle: 'Context Subtitle'
});

export const HeaderProvider = HeaderContext.Provider;
export const HeaderConsumer = HeaderContext.Consumer;
export default HeaderContext;
