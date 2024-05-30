import { BaseContextDataType } from "../../../../store/types";

export type TripListType =
  {
    data: TripDataType
  };

type TripDataType =
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
  data: TripListType;
  actions: TripSearchActionsType
};

export type TripSearchActionsType = {
  listTrips: (payload: BaseContextDataType<TripListType>) => void
}

export type ActionKind =
  'LIST_TRIP'


