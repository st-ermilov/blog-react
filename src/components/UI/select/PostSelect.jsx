import React from 'react';

/* Компонент для выбора алфавитной сортировки по заголовку/тексту поста*/
const PostSelect = ({options, defaultValue, value, onChange}) => {
    return (
        <select value={value} onChange={(e) => onChange(e.target.value)}>
            <option disabled={true} value="">{defaultValue}</option>
            {options.map((item) => <option key={item.value} value={item.value}>{item.name}</option>)}
        </select>
    );
};

export default PostSelect;