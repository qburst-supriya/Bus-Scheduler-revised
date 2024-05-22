import { useContext } from 'react';

export const useCustomContext = <T>(Context: React.Context<T>) => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error('useCustomContext must be used within a ContextProvider');
  }
  return context;
};
