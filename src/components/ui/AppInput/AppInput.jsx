import React from 'react'
import './AppInput.scss'
export default function AppInput({placeholder, value, onInputChange, onInputClear, ...props}) {
  const onChange = (e) => {
    onInputChange(e.target.value);
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      props.onPressEnter(e.target.value);
    }
  }

  return (
    <div className='AppInput'>
        <input  
          className='AppInput__input'
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        {value.length ? 
          <div className='AppInput__clear' onClick={onInputClear}>
            X
          </div>
          : ''
        }

    </div>
  )
}
