import * as React from 'react';
import { BaseContextProvider, createBaseContext } from '../../../store/contextProvider';
import { TripSearchActionsType, TripListContextType, TripListType } from './types';
import { TripSearchReducer } from './reducer';
import { BaseContextType } from '../../../store/types';

const initialData: TripListType = { data: { resultCount: 0, trips: [], message: '', success: false } };

const initialContextData: TripListContextType = {
    data: { ...initialData },
    actions: {
        listTrips: () => {},
    },
};

const TripSearchContext: React.Context<TripListContextType> = createBaseContext<TripListContextType>(initialContextData);

const TripSearchContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [data, dispatch] = React.useReducer(TripSearchReducer, initialData);

    const listTrips = (payload: TripListType) => {
        dispatch({ type: 'LIST_DATA', payload: { ...payload } });
    };
    const actions: TripSearchActionsType = { listTrips };
    const contextvalue: BaseContextType<TripListType> = {
        data,
        actions,
    };

    const ContextObject = TripSearchContext as unknown as React.Context<BaseContextType<TripListType>>;

    return (
        <BaseContextProvider value={contextvalue} Context={ContextObject}>
            {children}
        </BaseContextProvider>
    );
};

export { TripSearchContext, TripSearchContextProvider };
