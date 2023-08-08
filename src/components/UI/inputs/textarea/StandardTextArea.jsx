import React from 'react';

import styles from './standard_textarea.module.scss'

const StandardTextArea = (props) => {
    return (
        <textarea className={styles.textarea} {...props} ></textarea>

    );
};

export default StandardTextArea;