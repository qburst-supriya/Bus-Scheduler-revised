import { ActionType } from "../../../../store/types";
import { TripListType } from "./types";
import { ActionKind } from "./enums";



export const TripSearchReducer = (state: TripListType, action: ActionType<TripListType>): TripListType => {
  switch (action.type) {
    case ActionKind.LIST_TRIP: {
      return action.payload as unknown as TripListType;
    }
    default:
      return state;
  }
};
