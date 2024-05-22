import { ActionType } from "../../../store/types";
import { TripSearchType } from "./types";


export const TripSearchReducer = (state: TripSearchType, action: ActionType<TripSearchType>): TripSearchType => {
  switch (action.type) {
    case 'LIST_DATA': {
      return { data: { ...action.payload } };
    }
    default:
      return state;
  }
};
