import React, {FC} from 'react';
import styles from './TableColumn.module.css';
import TableSection from "@/components/experience/table_column/table_section/TableSection";
import {ITableData} from "@/components/interfaces/TableData";

interface ITableColumnProps {
    heading: string;
    data: ITableData[]
}

const TableColumn: FC<ITableColumnProps> = ({heading, data}) => {

    return (
        <div className={styles.table_column}>
            <div className={styles.column_heading}>
                {heading}
            </div>
            {
                data.map((item,index) => (
                    data.length - 1 !== index ?
                        <div className={styles.elements_wrapper} key={index}>
                            <span className={styles.elements}>
                                <span className={styles.circle}/>
                                <span className={styles.line}/>
                            </span>
                            <TableSection date={item.date} heading={item.heading} description={item.description}/>
                        </div>
                        :
                        <div className={styles.elements_wrapper} key={index}>
                             <span className={styles.elements}>
                                <span className={styles.circle}/>
                             </span>
                            <TableSection date={item.date} heading={item.heading} description={item.description}/>
                        </div>
                ))
            }
        </div>
    );
};

export default TableColumn;