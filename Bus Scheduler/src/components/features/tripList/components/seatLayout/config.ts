
import normalIcon from '@/assets/seat.png';
import selectedIcon from '@/assets/seatSelected.png';
import bookedIcon from '@/assets/seatBooked.png';

export type SeatTypes = 'sleeper';

export type iconsType = {
    normalIcon: string, selectedIcon: string, bookedIcon: string
}

export type seatIconsType = {
    sleeper: iconsType
}

export const seatIcons: seatIconsType = {
    sleeper: { normalIcon, selectedIcon, bookedIcon },
};

