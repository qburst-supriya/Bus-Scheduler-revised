import * as React from 'react';
import { TripDetailsActionsType, TripDetailsContextType, TripDetailsDataType } from './types';
import { TripDetailsReducer } from './storeState';

const initialData: TripDetailsDataType = { bookings: [], message: '', success: false };

const initialContextData: TripDetailsContextType = {
    data: { ...initialData },
    actions: {
        setTripDetailsData: () => {},
    },
};

const TripDetailsContext: React.Context<TripDetailsContextType> = React.createContext(initialContextData);

const TripDetailsContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [data, dispatch] = React.useReducer(TripDetailsReducer, initialData);

    const setTripDetailsData = (payload: TripDetailsDataType) => {
        dispatch({ type: 'FETCH_DATA', payload });
    };
    const actions: TripDetailsActionsType = { setTripDetailsData };
    const contextValue: TripDetailsContextType = {
        data,
        actions,
    };

    return <TripDetailsContext.Provider value={contextValue}>{children}</TripDetailsContext.Provider>;
};

export { TripDetailsContext, TripDetailsContextProvider };
