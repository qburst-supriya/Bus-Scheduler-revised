import { ActionType } from "../../../../store/types";
import { TripListType, ActionKind } from "./types";



export const TripSearchReducer = (state: TripListType, action: ActionType<TripListType, ActionKind>): TripListType => {
  switch (action.type) {
    case "LIST_TRIP": {
      return action.payload as unknown as TripListType;
    }
    default:
      return state;
  }
};
