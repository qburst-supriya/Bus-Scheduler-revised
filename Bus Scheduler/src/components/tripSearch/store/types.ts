
export type TripSearchType =
  {
    resultCount: number;
    trips: { busId: string; id: number; busType: string; totalSeats: number; seatType: string }[];
    message?: string;
    success?: boolean;
  };

export type TripSearchContextType = {
  data: TripSearchType;
  actions: TripSearchActionsType
};

export type TripSearchActionsType = {
  listTrips: (payload: TripSearchType) => void
}
