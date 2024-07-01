import React from 'react';
import styles from './ExperienceHeading.module.css';

const ExperienceHeading = () => {
    return (
        <div className={styles.heading}>
            My <span className={styles.second_word}>Journey</span>
        </div>
    );
};

export default ExperienceHeading;