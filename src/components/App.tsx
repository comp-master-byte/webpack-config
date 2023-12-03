import React, { useState } from 'react';
import './App.scss'

const App: React.FC = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <div>{counter}</div>
            <button onClick={() => setCounter(prev => prev + 1)}>Increment</button>
        </div>
    )
}

export default App