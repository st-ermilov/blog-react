import React from 'react';

import styles from './standard_input.module.scss'

const StandardInput = (props) => {
    return (
        <input className={styles.input} {...props} />
    );
};

export default StandardInput;
