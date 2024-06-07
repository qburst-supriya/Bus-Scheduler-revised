import { ActionType } from "@/store/types";
import { TripData, ActionKind } from "@/components/shared/tripSearch/store/types";



export const TripSearchStore = (state: TripData, action: ActionType<TripData, ActionKind>): TripData => {
    switch (action.type) {
        case "LIST_TRIP": {
            return action.payload;
        }
        default:
            return state;
    }
};
