import { ActionType } from "@/store/types";
import { TripDataType, ActionKind } from "@/services/types";



export const TripSearchStore = (state: TripDataType, action: ActionType<TripDataType, ActionKind>): TripDataType => {
    switch (action.type) {
        case "LIST_TRIP": {
            return action.payload;
        }
        default:
            return state;
    }
};
