import React from 'react';

import styles from './standard_button.module.scss'

const StandardButton = (props) => {
    return (
        <button className={styles.btn} {...props}>
        </button>
    );
};

export default StandardButton;