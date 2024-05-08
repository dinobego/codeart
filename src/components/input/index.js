import "./style.css"

export default function Input({ label, id, className, value, onChange, ...args }) {
  return (
    <div className="inputContainer">
      {label &&
        <label htmlFor={id}>{label}</label>
      }
      <input className={`input ${className}`} value={value} onChange={onChange} {...args} />
    </div>
  )
}
