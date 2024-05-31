
// export type ParamsType = {
//   startPoint: 'string', endPoint: 'string', date: 'string'
// }

export type TripDetailsDataType = {
  bookings: TripDetailsType[];
  message: string;
  success: boolean;
};

export type TripDetailsType = {
  busId: string;
  id: number;
  busType: string;
  totalSeats: number;
  seatType: string;
};



export type TripDetailsContextType = {
  data: TripDetailsDataType;
  actions: TripDetailsActionsType
};

export type TripDetailsActionsType = {
  setTripDetailsData: (payload: TripDetailsDataType) => void,
}

export type ActionKind =
  'FETCH_DATA'


