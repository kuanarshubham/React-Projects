import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Card = () => {

    const { mode } = useContext(UserContext);

    function col(){
        if (mode === "light") {
            return ["bg-slate-200", "border-yellow-400", "text-black"];
        }

        return ["bg-slate-600", "border-slate-400", "text-white"];
    }

    let x = col();

    return (
        <div className={`h-72 w-72 ${x[0]} border-2 ${x[1]} rounded-xl flex items-center p-4 ${x[2]}`}>
            <div>
                <h2 className='text-2xl'>Name: Shubham Kuanar</h2>
                <p>About: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui voluptate non ex.</p>
            </div>
        </div>
    )
}

export default Card