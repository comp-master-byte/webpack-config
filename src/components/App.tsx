import React, { useState } from 'react';
import styles from './App.module.scss'
import { Link, Outlet } from 'react-router-dom';
import image from "@/assets/workhard.jpg";
import AvatarSvg from "@/assets/avatar.svg";

const App: React.FC = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <div>
                <img width={250} height={'auto'} src={image} alt="" />
            </div>
            <div>
                <AvatarSvg 
                    width={250} 
                    height={250}
                    color={'green'}  
                />
            </div>
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