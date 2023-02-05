import React from 'react'
import './AppButton.scss'

export default function AppButton({btnText, handleClick, disabled = false}) {
  
    return (
        <button
            type='button'
            onClick={handleClick}
            className={`AppButton ${disabled ? 'AppButton--disabled': 'AppButton'}`}
            disabled={disabled}
        >
            {btnText}
        </button>
  )
}
