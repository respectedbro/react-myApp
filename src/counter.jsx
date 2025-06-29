import {useState} from 'react'

function Counter() {
    const [count, setCount] = useState(10)
    const [showError, setShowError] = useState(false);

    function increase() {
        setCount((prevState) => prevState + 1);
    }

    function decrease() {
        setCount((prevState) => prevState - 1)

        if (count <= 0) {
            setShowError(true)
            cou
        }
    }

    return <>
        <button onClick={increase}>Увеличить</button>
        <p>{count}</p>
        <button onClick={decrease}>Уменьшить</button>
        {showError && (
            <p style={{ color: 'red' }}>
                Пожалуйста, измените количество, оно не может быть равно 0
            </p>
        )}

    </>
}

export default Counter