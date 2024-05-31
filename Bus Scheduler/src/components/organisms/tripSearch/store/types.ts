
export type TripDataType =
  {
    resultCount: number;
    trips: TripListDataType[];
    message?: string;
    success?: boolean;
  };

export type TripListDataType =
  {
    busId: string; id: number; busType: string; totalSeats: number; seatType: string
  };

export type TripListContextType = {
  data: TripDataType;
  actions: TripSearchActionsType
};

export type TripSearchActionsType = {
  listTrips: (payload: TripDataType) => void,
}

export type ParamsType = {
  startPoint: 'string', endPoint: 'string', date: 'string'
}

export type ActionKind =
  'LIST_TRIP'


