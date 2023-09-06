import React from 'react';
import styles from './standard_modal.module.scss'

/* Компонент открытия/закрытия модального окна, путём добавления/удаления необходимого CSS-класса
* из массива стилей */
const StandardModal = ({children, visible, setVisible}) => {
    const modalStyles = [styles.modal_container]
    if (visible) {
        modalStyles.push(styles.show)
    }
    return (
        <div className={modalStyles.join(' ')} onClick={() => setVisible(false)}>
            <div className={styles.modal_content} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default StandardModal;