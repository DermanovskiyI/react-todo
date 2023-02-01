import React from 'react'
import './AppButton.scss'

export default function AppButton({btnText, handleClick}) {
  
    return (
        <button
            type='button'
            onClick={handleClick}
            className="AppButton"
        >
            {btnText}
        </button>
  )
}
