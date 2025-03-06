import './LoadingCircle.css'

export default function LoadingCircle({ message }) {
    return (
        <div className="circle-container">
            <div className="circle"></div>
            {message && <p>{message}</p>}
        </div>
    )
}