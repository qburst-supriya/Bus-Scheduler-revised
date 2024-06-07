export type TripDetailsData = {
  bookings: TripDetailsType[];
  totalSeats: number;
  message: string;
  success: boolean;
};

export type TripDetailsType = {
  busId: string;
  id: number;
  busType: string;
  seatNumber: number;
  seatType: string;
};



export type TripDetailsContextType = {
  data: TripDetailsData;
  actions: TripDetailsActionsType
};

export type TripDetailsActionsType = {
  setTripDetailsData: (payload: TripDetailsData) => void,
}

export type ActionKind =
  'FETCH_DATA'


