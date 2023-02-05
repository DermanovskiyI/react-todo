import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import TodoForm from '../components/todo/TodoForm';
import TodoItem from '../components/todo/TodoItem';
import AppButton from '../components/ui/AppButton/AppButton';
import AppInput from '../components/ui/AppInput/AppInput';
import '../styles/TodoPage.scss'



const Todo = () => {

    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([]);
    const [id, setId] = useState(1);

    const onInputChange = (val) => {
        setTodo(val)
    }

    const onInputClear = () => {
        setTodo('')
    }

    const addNewTodo = () => {
        if(todo.length) {
            const newTodo = {
                id,
                todo
            }
            setTodoList([...todoList, newTodo])
            onInputClear()
            setId(Date.now())
        }        

    }


    return (
        <div>
            <h1>todo list</h1>
            {/* <Link to={`${Date.now()}`}>Динамическая страница</Link> */}
            <div className='container'>
                <TodoForm />
                <div className="todo">
                    <AppInput 
                        placeholder={'Add new task...'}
                        value={todo}
                        onInputChange={onInputChange}
                        onInputClear={onInputClear}
                        onPressEnter={addNewTodo}
                    />

                    <AppButton 
                        handleClick={addNewTodo}
                        btnText={'Добавить'}
                    />
                </div>
                
                {todoList.map(todo => <TodoItem todo={todo} key={todo.id} />)}
            </div>
            
        </div>
    )
}

export default Todo;