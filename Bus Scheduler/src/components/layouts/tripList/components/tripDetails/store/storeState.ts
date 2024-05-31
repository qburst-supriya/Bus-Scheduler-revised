import { ActionType } from "@/store/types";
import { ActionKind, TripDetailsDataType } from "./types";

export const TripDetailsReducer = (state: TripDetailsDataType, action: ActionType<TripDetailsDataType, ActionKind>): TripDetailsDataType => {
    switch (action.type) {
        case 'FETCH_DATA': {
            return action.payload;
        }
        default:
            return state;
    }
};
