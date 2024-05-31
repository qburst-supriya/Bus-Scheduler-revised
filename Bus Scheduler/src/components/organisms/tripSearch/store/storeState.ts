import { ActionType } from "@/store/types";
import { TripDataType, ActionKind } from "./types";



export const TripSearchReducer = (state: TripDataType, action: ActionType<TripDataType, ActionKind>): TripDataType => {
    switch (action.type) {
        case "LIST_TRIP": {
            return action.payload;
        }
        default:
            return state;
    }
};
