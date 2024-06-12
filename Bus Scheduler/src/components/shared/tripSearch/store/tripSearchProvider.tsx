import * as React from 'react';
import { TripListContextType, TripData, TripSearchActionsType } from '@/components/shared/tripSearch/store/types';
import { TripSearchStore } from '@/components/shared/tripSearch/store/storeState';

const initialData: TripData = { resultCount: 0, trips: [], message: '', success: false };

const initialContextData: TripListContextType = {
    data: { ...initialData },
    actions: {
        listTrips: () => {},
    },
};

const TripSearchContext: React.Context<TripListContextType> = React.createContext(initialContextData);

const TripSearchContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [data, dispatch] = React.useReducer(TripSearchStore, initialData);

    const listTrips = (payload: TripData) => {
        dispatch({ type: 'LIST_TRIP', payload });
    };
    const actions: TripSearchActionsType = { listTrips };
    const contextValue: TripListContextType = {
        data,
        actions,
    };

    return <TripSearchContext.Provider value={contextValue}>{children}</TripSearchContext.Provider>;
};

export { TripSearchContext, TripSearchContextProvider };
