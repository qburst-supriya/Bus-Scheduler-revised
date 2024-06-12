
export type TripData =
  {
    resultCount: number;
    trips: TripListData[];
    message?: string;
    success?: boolean;
  };

export type TripListData =
  {
    busId: string; id: number; busType: string; totalSeats: number; seatType: string
  };

export type TripListContextType = {
  data: TripData;
  actions: TripSearchActionsType
};

export type TripSearchActionsType = {
  listTrips: (payload: TripData) => void,
}

export type ParamsType =
  { startPoint: string | ''; endPoint: string | ''; date: string | '' }


export type ActionKind =
  'LIST_TRIP'


