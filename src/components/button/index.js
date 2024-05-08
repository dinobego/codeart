import "./style.css"

export default function Button({ text, className, ...args }) {
  return (
    <button className={`button ${className}`} {...args}>{text}</button>
  )
}
