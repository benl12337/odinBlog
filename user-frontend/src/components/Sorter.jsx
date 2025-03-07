import { useState } from 'react'
import './Sorter.css'

export default function Sorter({ onToggle }) {

    const [toggled, setToggled] = useState(false);

    const handleToggle = () => {
        setToggled(!toggled);
        onToggle();
    }


    return (
        <div className='sorter'>
            Date posted <div className={`arrow ${toggled ? 'toggled' : ''}`} onClick={handleToggle}>↓</div>
        </div>
    )
}