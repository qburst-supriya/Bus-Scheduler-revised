import { ActionType } from "@/store/types";
import { ActionKind, TripDetailsData } from "@/components/features/tripList/components/tripDetails/store/types";

export const TripDetailsStore = (state: TripDetailsData, action: ActionType<TripDetailsData, ActionKind>): TripDetailsData => {
    switch (action.type) {
        case 'FETCH_DATA': {
            return action.payload;
        }
        default:
            return state;
    }
};
