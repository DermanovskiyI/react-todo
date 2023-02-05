import React, { useRef } from 'react'
import TodoStepsDesc from './TodoStepsDesc'
import TodoStepsName from './TodoStepsName'
import TodoStepsImportant from './TodoStepsImportant'
import TodoStepsCalendar from './TodoStepsCalendar'
import { SwitchTransition, CSSTransition } from "react-transition-group";
import './TodoSteps.scss'

export default function TodoSteps({currentStep, fillTodo}) {
    const TodoStepsNameRef = useRef(null);
    const TodoStepsDescRef = useRef(null);
    const TodoStepsImportantRef = useRef(null);
    const TodoStepsCalendarRef = useRef(null);
    let nodeRef = null;

    const activeStep = () => {
        switch (currentStep) {
            case 1: 
                nodeRef = TodoStepsNameRef;
                return (TodoStepsName);
            case 2: 
                nodeRef = TodoStepsDescRef;
                return (TodoStepsDesc);
            case 3: 
                nodeRef = TodoStepsImportantRef;
                return (TodoStepsImportant);
            case 4: 
                nodeRef = TodoStepsCalendarRef;
                return (TodoStepsCalendar);
            default:
                nodeRef = TodoStepsNameRef;
                return (TodoStepsName)
        }
    };

    const ActiveComponent = activeStep();

    return (
        <div>
            <SwitchTransition>
                <CSSTransition
                    key={currentStep}
                    nodeRef={nodeRef}
                    addEndListener={(done) => {
                        nodeRef.current.addEventListener("transitionend", done, false);
                      }}
                    classNames='fade'
                >
                    <div ref={nodeRef}>
                        <ActiveComponent setTodoProp={fillTodo}/>
                    </div>
                </CSSTransition>
            </SwitchTransition>
        </div>
      )
}
