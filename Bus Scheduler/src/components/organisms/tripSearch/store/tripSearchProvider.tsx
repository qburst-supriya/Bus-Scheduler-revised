import * as React from 'react';
import { TripListContextType, TripDataType, TripSearchActionsType } from '@/components/organisms/tripSearch/store/types';
import { TripSearchReducer } from '@/components/organisms/tripSearch/store/storeState';

const initialData: TripDataType = { resultCount: 0, trips: [], message: '', success: false };

const initialContextData: TripListContextType = {
    data: { ...initialData },
    actions: {
        listTrips: () => {},
    },
};

const TripSearchContext: React.Context<TripListContextType> = React.createContext(initialContextData);

const TripSearchContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [data, dispatch] = React.useReducer(TripSearchReducer, initialData);

    const listTrips = (payload: TripDataType) => {
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
