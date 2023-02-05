import React, {useState} from 'react'
import AppTextArea from '../../ui/AppTextArea/AppTextArea'

export default function TodoStepsName({setTodoProp}) {
    const [todoDesc, setDesc] = useState('');

    const onInputChange = (description) => {
        setDesc(description);
        setTodoProp({description});
    };

    return (
        <div className='TodoStepsName'>
            <div className="label">
                Описание задачи
            </div>
            <AppTextArea 
                placeholder={'Введите описание задачи'}
                value={todoDesc}
                onInputChange={onInputChange}
            />
        </div>
    )
}

