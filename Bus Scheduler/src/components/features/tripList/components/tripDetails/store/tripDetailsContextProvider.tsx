import * as React from 'react';
import { TripDetailsActionsType, TripDetailsContextType, TripDetailsData } from '@/components/features/tripList/components/tripDetails/store/types';
import { TripDetailsStore } from '@/components/features/tripList/components/tripDetails/store/storeState';

const initialData: TripDetailsData = { bookings: [], totalSeats: 0, message: '', success: false };

const initialContextData: TripDetailsContextType = {
    data: { ...initialData },
    actions: {
        setTripDetailsData: () => {},
    },
};

const TripDetailsContext: React.Context<TripDetailsContextType> = React.createContext(initialContextData);

const TripDetailsContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [data, dispatch] = React.useReducer(TripDetailsStore, initialData);

    const setTripDetailsData = (payload: TripDetailsData) => {
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
