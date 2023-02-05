import React, {useState} from 'react'
import AppButton from '../ui/AppButton/AppButton';
import TodoSteps from './TodoSteps/TodoSteps';

export default function TodoForm() {
    const [currentStep, setStep] = useState(3);
    // const [disableNextBtn, setDisable] = useState(false);
    const [todo, setTodo] = useState({
        id: Date.now(),
        name: '',
        description: '',
        isImportant: false,
        date: null,
        isComplited: false,
    });

    const fillTodo = (field) => {
        setTodo({...todo, ...field})
    };

    const nextStep = () => {
        setStep(currentStep + 1)
    };

    const prevStep = () => {
        if (currentStep >= 1) setStep(currentStep - 1)
    };

    const steps = [
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        },
        {
            id: 4,
        },
    ];

    const disableNextBtn = () => {
        if (currentStep === steps.length) {
            return true
        } else {
            switch (currentStep) {
                case 1: 
                    return !todo.name;
                case 2: 
                    return !todo.description;
                case 3: 
                    return false;
                case 4: 
                    return !todo.date;
                default:
                    return !todo.name;
            }
        }
    }

    return (
        <div>
            <div>newtodo is: {JSON.stringify(todo)}</div>
            <div className="steps">
                <TodoSteps 
                    currentStep={currentStep}
                    fillTodo={fillTodo}
                />
            </div>
            <div className='TodoForm__controlls'>
                <AppButton 
                    handleClick={prevStep}
                    btnText={'Назад'}
                    disabled={currentStep === 1 ? true : false}
                />
                <AppButton 
                    handleClick={nextStep}
                    btnText={'Далее'}
                    disabled={disableNextBtn()}
                />
            </div>
        </div>
    )
}
