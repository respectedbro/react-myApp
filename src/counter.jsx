import {useState} from 'react';

//1
function Counter() {
    const [count, setCount] = useState(10);
    const [showError, setShowError] = useState(false);

    function increase() {
        setCount((prevState) => prevState + 1);
        setShowError(false);
    }

    function decrease() {
        if (count > 0) {
            setCount((prevState) => prevState - 1);
            setShowError(false);
        } else if (count <= 0) {
            setShowError(true);
        }
    }

    return <>
        <button onClick={increase}>Увеличить</button>
        <p>{count}</p>
        <button onClick={decrease}>Уменьшить</button>
        {showError && (
            <p style={{color: 'red'}}>
                Пожалуйста, измените количество, оно не может быть равно 0
            </p>
        )}

    </>;
}


export default Counter;