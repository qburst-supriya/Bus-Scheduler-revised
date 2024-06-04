import { ReactElement, ReactNode } from 'react';
import '@/components/ui/table/style.scss';

export type DataType<T> = T & { func?: () => void };

export type ColumnType = {
    key: string;
    title: string;
    width: string;
    render?: (rowData: object) => ReactElement | null;
};

type TableType<T> = {
    data: DataType<T>[];
    columns: ColumnType[];
};

const Table = <T,>({ data, columns }: TableType<T>): JSX.Element | null => {
    return data.length && columns.length ? (
        <>
            <div className="table-row-container">
                <Rows data={data} columns={columns}></Rows>
            </div>
        </>
    ) : null;
};

export default Table;

const Rows = <T,>({ data, columns }: TableType<T>): ReactNode =>
    data.map((row: DataType<T>) => {
        return (
            <div className="table-row-wrapper" key={row.id}>
                <RowItemList row={row} columns={columns}></RowItemList>
            </div>
        );
    });

const RowItemList = <T,>({ row, columns }: { row: DataType<T>; columns: ColumnType[] }): ReactNode => {
    return columns.map((column) => <RowItem row={row} column={column}></RowItem>);
};
const RowItem = <T,>({ row, column }: { row: DataType<T>; column: ColumnType }): ReactElement | null => {
    if (column.key == 'action' && column.render) {
        return column.render(row);
    } else {
        const columnKey = column.key as string;
        const displayData = row[columnKey];
        return (
            <div key={displayData} style={{ width: column.width }}>
                {displayData}
            </div>
        );
    }
};
