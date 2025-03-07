import './Search.css'

export default function Search({value, onChange}) {
    return <>
    <input type="text" value={value} onChange={onChange} placeholder="Search"/>
    </>
    
    
}