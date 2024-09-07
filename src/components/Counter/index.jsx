import { useState } from "react"

export default function Counter() {
    
    const [number, setNumber] = useState(0)

    function add() {
        let newNumber = number + 1
        setNumber(newNumber)
    }
    
    return (
        <div>
            <h1>Counter</h1>
            <h3>{number}</h3>
            <button onClick={() => add()}>Add number</button>
        </div>
    )
}