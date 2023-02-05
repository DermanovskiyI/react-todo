import React, {useState, useRef} from 'react'
import './AppCheckbox.scss'

export default function AppCheckbox({onInputChange, label}) {
    const inputRef = useRef(false);
    const [value, setValue] = useState(false);
    const onChange = () => {
        inputRef.current = !value;
        setValue(inputRef.current);
        onInputChange(inputRef.current);
    };

    return (
        <div  className='AppCheckbox'>
            <label className='AppCheckbox__label'>
                <div>{label}</div>
                <input
                    className='AppCheckbox__native'
                    type="checkbox"
                    value={value}
                    onChange={onChange}
                />
                <div className={`AppCheckbox__visible ${value ? 'AppCheckbox__visible--active' : ''}`} >
                    <div className='AppCheckbox__check'>V</div>
                </div>
            </label>
        </div>
    )
}
