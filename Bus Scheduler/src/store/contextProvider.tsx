import { Context, useContext, createContext } from 'react';
import { BaseContextProviderType, BaseContextType } from './types';

export const createBaseContext = <T,>(value: T): Context<T> => {
    return createContext(value);
};

export const useCustomContext = <T,>(Context: Context<T>) => {
    const context = useContext(Context);
    if (context === undefined) {
        throw new Error('useCustomContext must be used within a ContextProvider');
    }
    return context;
};

export const BaseContextProvider = <T,>({ children, value, Context }: BaseContextProviderType<T>) => {
    const ContextValue: BaseContextType<T> = value;
    return <Context.Provider value={ContextValue}>{children}</Context.Provider>;
};
