import React, {FC} from 'react';
import styles from './TableSection.module.css';
import DateSVG from "@/components/experience/table_column/table_section/dateSVG/DateSVG";

interface ITableSectionProps {
    date: string;
    heading: string;
    description: string;
}

const TableSection: FC<ITableSectionProps> = ({date, heading, description}) => {
    return (
        <div className={styles.section}>
            <div className={styles.section_date}>
                <DateSVG/>
                {date}
            </div>
            <div className={styles.section_heading}>
                {heading}
            </div>
            <div className={styles.section_description}>
                {description}
            </div>
        </div>
    );
};

export default TableSection;