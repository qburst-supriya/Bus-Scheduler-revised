import { ReactElement, ReactNode } from 'react';
import '@/components/ui/table/style.scss';

type BaseDataType = {
    id: number;
};
export type ColumnType<T> = {
    key: string;
    title: string;
    width: string;
    render?: (rowData: T) => ReactElement | null;
};

type TableType<T> = {
    data: T[];
    columns: ColumnType<T>[];
};

const Table = <T extends BaseDataType>({ data, columns }: TableType<T>): JSX.Element | null => {
    return data.length && columns.length ? (
        <>
            <div className="table-row-container">
                <Rows data={data} columns={columns}></Rows>
            </div>
        </>
    ) : null;
};

export default Table;

const Rows = <T extends BaseDataType>({ data, columns }: TableType<T>): ReactNode =>
    data.map((row: T) => {
        return (
            <div className="table-row-wrapper" key={row.id}>
                <RowItemList row={row} columns={columns}></RowItemList>
            </div>
        );
    });

const RowItemList = <T extends BaseDataType>({ row, columns }: { row: T; columns: ColumnType<T>[] }): ReactNode => {
    return columns.map((column) => <RowItem row={row} column={column}></RowItem>);
};
const RowItem = <T extends BaseDataType>({ row, column }: { row: T; column: ColumnType<T> }): ReactElement | null => {
    if (column.key == 'action' && column.render) {
        return column.render(row);
    } else {
        const displayData = row[column.key as never];
        return (
            <div key={displayData} style={{ width: column.width }}>
                {displayData}
            </div>
        );
    }
};
