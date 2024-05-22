
export type TripListType =
  {
    data: {
      resultCount: number;
      trips: { busId: string; id: number; busType: string; totalSeats: number; seatType: string }[];
      message?: string;
      success?: boolean;
    }
  };

export type TripListContextType = {
  data: TripListType;
  actions: TripSearchActionsType
};

export type TripSearchActionsType = {
  listTrips: (payload: TripListType) => void
}
