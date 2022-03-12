import {useReducer, useState} from 'react'
import { reducer } from './Reducer';
import { type } from './Store';
import '../asset/Counter.css';

const Counter = ()=>{
    const [state, dispatch] = useReducer(reducer, 0);
    const [darkMode, setDarkMode] = useState(false);
    const sum = ()=>{
        dispatch({type : type.sum});
    }
    const subtract = ()=>{
        dispatch({type : type.subtract});
    }
    const reset = ()=>{
        dispatch({type : type.reset});
    }

    const handleDarkMode = ()=>{
        setDarkMode(!darkMode);
    }
    return(
        <div className={`${darkMode ? 'DarkMode':'counter'}`}>

            <div className='darkMode-Container'>
                <button className='btn btn_dark' onClick={handleDarkMode}>{darkMode ? (<i class='bx bxs-sun' ></i>)
                :(<i className='bx bxs-moon' ></i>)} </button>
            </div>

            <div class="accordion-item mt-2">
                <h2 class="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button"
                        data-bs-toggle="collapse" data-bs-target="#collapseTwo" 
                        aria-expanded="false" aria-controls="collapseTwo">
                        <h2>Counter</h2>
                    </button>
                </h2>
                <div id="collapseTwo" className={darkMode ? "accordion-collapse collapse dakrOpacity":"accordion-collapse collapse"} 
                    aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <div className={darkMode ? 'card darkModeCard':'card'}>
                            <div className='card-body'>
                                <h1 className='text-center state'>{state}</h1>

                            </div>
                            <div className={darkMode ? 'card-footer text-center dakModeFooter':'card-footer text-center'}>
                                    <button onClick={sum} className="btn btn-success"><i className='bx bx-plus' ></i></button>
                                    <button onClick={subtract} className='btn btn-danger'><i className='bx bx-minus'></i></button>
                                    <button onClick={reset} className='btn btn-warning'><i className='bx bxs-eraser'></i></button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Counter;