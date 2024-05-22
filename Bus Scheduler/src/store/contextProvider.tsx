import { Context, useContext, createContext } from 'react';
import { ContextProviderType, ContextValueType } from './types';

export const createCustomContext = <T,>(value: T): Context<T> => {
    return createContext(value);
};

export const useCustomContext = <T,>(Context: Context<T>) => {
    const context = useContext(Context);
    if (context === undefined) {
        throw new Error('useCustomContext must be used within a ContextProvider');
    }
    return context;
};

export const ContextProvider = <T,>({ children, value, Context }: ContextProviderType<T>) => {
    const ContextValue: ContextValueType<T> = value;
    return <Context.Provider value={ContextValue}>{children}</Context.Provider>;
};
