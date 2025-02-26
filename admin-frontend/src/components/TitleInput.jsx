import './TitleInput.css'
export default function TitleInput({onChange, value}) {
    return (
        <input className="title-input" type="text" onChange={onChange} value={value} />
    )
}