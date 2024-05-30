import { FC } from 'react';
import '@/components/atoms/table/style.scss';

export type DataType<T> = T & { func?: () => void };

export type ColumnType = {
    key: string;
    title: string;
    width: string;
    render?: (rowData: object) => void;
};

type TableType<T> = {
    data: DataType<T>[];
    columns: ColumnType[];
};

const generateHeader = (columns: ColumnType[]): (JSX.Element | void)[] =>
    columns.map((column: ColumnType) => {
        return (
            <div id={column.key} style={{ width: column.width }}>
                {column.title}
            </div>
        );
    });

const generateRows = <T,>(data: DataType<T>[], columns: ColumnType[]): JSX.Element[] =>
    data.map((row: DataType<T>) => {
        return (
            <div className="table-row-wrapper" key={row.id}>
                {generateRowItems(row as T, columns)}
            </div>
        );
    });

const generateRowItems = <T,>(row: DataType<T>, columns: ColumnType[]): (JSX.Element | void)[] => {
    return columns.map((columnKey) => {
        const displayData = row[columnKey.key];
        if (columnKey.key == 'action' && columnKey.render) return columnKey.render(row);
        else
            return (
                <div key={displayData} style={{ width: columnKey.width }}>
                    {displayData}
                </div>
            );
    });
};

const Table: FC<TableType<T>> = ({ data, columns }): JSX.Element | null => {
    return data.length && columns.length ? (
        <>
            <div className="table-header-container"> {generateHeader(columns)}</div>
            <div className="table-row-container"> {generateRows(data, columns)}</div>
        </>
    ) : null;
};

export default Table;
