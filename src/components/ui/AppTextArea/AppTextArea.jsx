import React from 'react'
import './AppTextArea.scss'
export default function AppTextArea({placeholder, onInputChange, value, ...props}) {
    const onChange = (e) => {
        onInputChange(e.target.value);
    };

    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
          props.onPressEnter(e.target.value);
        }
      }

    return (
        <textarea
            className='AppTextArea'
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            onKeyDown={onKeyDown}
        />
      )
}
