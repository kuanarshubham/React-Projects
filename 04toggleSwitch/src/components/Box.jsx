import React, { useContext } from 'react';
import Card from './Card';
import UserContext from '../context/UserContext'

const Box = () => {

    const { mode, setMode } = useContext(UserContext);

    const toggleMode = () => {
        if(mode === "light"){
            setMode("black");
        }
        else{
            setMode("light");
        }
    }
    return (
        <div className='w-[700px] h-[500px] bg-gray-900 flex items-center justify-center'>
            <div>
            <Card />
            <button onClick={toggleMode}>Turn to {mode === "light" ? "Dark Mode" : "Light Mode"}</button>
            </div>
        </div>
    )
}

export default Box;