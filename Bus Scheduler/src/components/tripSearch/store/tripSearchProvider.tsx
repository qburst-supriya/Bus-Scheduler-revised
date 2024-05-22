import * as React from 'react';
import { ContextProvider, createCustomContext } from '../../../store/contextProvider';
import { TripSearchActionsType, TripSearchContextType, TripSearchType } from './types';
import { TripSearchReducer } from './reducer';
import { ContextValueType } from '../../../store/types';

const initialData: TripSearchType = { resultCount: 0, trips: [], message: '', success: false };

const initialContextData: TripSearchContextType = {
    data: { ...initialData },
    actions: {
        listTrips: () => {},
    },
};

const TripSearchContext: React.Context<TripSearchContextType> = createCustomContext<TripSearchContextType>(initialContextData);

const TripSearchContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = React.useReducer(TripSearchReducer, initialData);

    const listTrips = (payload: TripSearchType) => {
        dispatch({ type: 'LIST_DATA', payload: { data: { ...payload } } });
    };
    const actions: TripSearchActionsType = { listTrips };
    const contextvalue: ContextValueType<TripSearchType> = {
        data: {
            data: {
                ...state,
            },
        },
        actions,
    };

    const ContextObject = TripSearchContext as unknown as React.Context<ContextValueType<TripSearchType>>;

    return (
        <ContextProvider value={contextvalue} Context={ContextObject}>
            {children}{' '}
        </ContextProvider>
    );
};

export { TripSearchContext, TripSearchContextProvider };
