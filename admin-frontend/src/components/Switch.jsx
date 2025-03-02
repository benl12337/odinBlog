import './Switch.css';

const Switch = ({ isOn, handleToggle }) => {
  return (
    <>
      <input
      checked={isOn}
      onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
        style={({background: isOn && '#1a83ce' })}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Switch;