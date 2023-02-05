import React, {useState} from 'react'
import AppInput from '../../ui/AppInput/AppInput'

export default function TodoStepsName({setTodoProp}) {
    const [name, setName] = useState('')

    const onInputChange = (name) => {
        setName(name);
        setTodoProp({name});
    }

    const onInputClear = () => {
        setName('');
        setTodoProp({name: ''});
    }


    return (
        <div className='TodoStepsName'>
            <div className="label">
                Введите название задачи
            </div>
            <AppInput 
                placeholder={'Введите название задачи'}
                value={name}
                onInputChange={onInputChange}
                onInputClear={onInputClear}
            />
        </div>
    )
}
