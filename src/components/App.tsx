import React, { useState } from 'react';
import styles from './App.module.scss'
import { Link, Outlet } from 'react-router-dom';

const App: React.FC = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <nav>
                <Link to='/about'>about</Link>
                <Link to='/shop'>shop</Link>
            </nav>
            <div className={styles.value}>{counter}</div>
            <button className={styles.button} onClick={() => setCounter(prev => prev + 1)}>Increment</button>
            <Outlet />
        </div>
    )
}

export default App