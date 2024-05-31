import { FC, useState } from 'react';
import { seatIcons } from './config';
import './style.scss';
import { useCustomContext } from '@/store/contextProvider';
import { TripDetailsContext } from '../tripDetails/store/tripDetailsContextProvider';
import Button from '@/components/atoms/button/Button';
import './style.scss';
import SingleSeat from './sleeper';

type SeatLayoutType = {
    type: string;
};

const SeatLayout: FC<SeatLayoutType> = ({ type }) => {
    const [totalseatsSelected, setTotalseatsSelected] = useState<number[] | []>([]);

    const { data } = useCustomContext(TripDetailsContext);
    const seatcount = data?.data?.trip?.totalSeats;
    const bookings = data?.data?.trip?.bookings;
    const columnCount = 4;
    const rowCount = seatcount / columnCount;
    const remainingSeats = seatcount % columnCount;
    const icons = seatIcons[type];

    const updateSeatSelection = (id: number, isSelected: boolean) => {
        if (isSelected) {
            setTotalseatsSelected((previosSelectedSeats: number[]) => [...previosSelectedSeats, id]);
        } else {
            setTotalseatsSelected((previosSelectedSeats: number[]) => previosSelectedSeats.filter((item: number) => item !== id));
        }
    };
    //keep the booking ids in an array. if the seatnumber is present remove it. then find the seatnumber.

    const generateLayout = () => {
        let seatNumber = 0;
        let seatList = [];
        for (let i = 0; i < columnCount + remainingSeats; i++) {
            for (let j = 0; j < rowCount; j++) {
                seatNumber++;
                const isBooked = bookings?.find((item) => (item.seatNumber === seatNumber.toString() ? true : false));
                seatList.push(
                    <SingleSeat
                        icons={icons}
                        seatSelectionHandler={(id: number, isSelected: boolean) => updateSeatSelection(id, isSelected)}
                        seatNumber={seatNumber}
                        key={seatNumber}
                        isBooked={isBooked}
                    ></SingleSeat>
                );
            }
        }
        return seatList.reverse();
    };

    return (
        <div className="layout-container">
            <div className="legend">
                <p className="legend-green"> Green: Selected</p>
                <p className="legend-blue"> Blue: Available</p>
                <p className="legend-grey"> Gray: Booked</p>
            </div>
            <div className="seatlayout-container">{generateLayout()}</div>
            <Button btnText="Proceed to booking" onClick={() => alert(`Selected seat numbers are ${totalseatsSelected.join(', ')}`)}></Button>
        </div>
    );
};

export default SeatLayout;
