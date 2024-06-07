import { FC, useState } from 'react';

import '@/components/features/tripList/components/seatLayout/sleeper/style.scss';
import { iconsType } from '@/components/features/tripList/components/seatLayout/config';

export type singleSeatPropType = {
    icons: iconsType;
    seatNumber: number;
    isBooked: boolean;
    seatSelectionHandler: (_id: number, _isSelected: boolean) => void;
};

const SingleSeat: FC<singleSeatPropType> = ({ seatNumber, seatSelectionHandler, icons, isBooked }) => {
    const [url, setUrl] = useState(isBooked ? icons.bookedIcon : icons.normalIcon);
    const [isSelected, setSelected] = useState(false);
    const name = `seat${seatNumber}`;

    const handleOnclick = () => {
        if (!isBooked) {
            seatSelectionHandler(seatNumber, !isSelected);
            setUrl(isSelected ? icons.normalIcon : icons.selectedIcon);
            setSelected(!isSelected);
        }
    };
    return <img alt={name} src={url} onClick={handleOnclick} key={seatNumber} role="presentation" />;
};

export default SingleSeat;
