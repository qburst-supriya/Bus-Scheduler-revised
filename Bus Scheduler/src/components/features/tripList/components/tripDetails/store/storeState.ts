import { ActionType } from "@/store/types";
import { ActionKind, TripDetailsDataType } from "@/components/features/tripList/components/tripDetails/store/types";

export const TripDetailsStore = (state: TripDetailsDataType, action: ActionType<TripDetailsDataType, ActionKind>): TripDetailsDataType => {
    switch (action.type) {
        case 'FETCH_DATA': {
            return action.payload;
        }
        default:
            return state;
    }
};
