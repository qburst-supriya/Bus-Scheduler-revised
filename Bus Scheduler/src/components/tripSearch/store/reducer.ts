import { ActionType } from "../../../store/types";
import { TripListType } from "./types";


export const TripSearchReducer = (state: TripListType, action: ActionType<TripListType>): TripListType => {
  switch (action.type) {
    case 'LIST_DATA': {
      return action.payload as unknown as TripListType;
    }
    default:
      return state;
  }
};
