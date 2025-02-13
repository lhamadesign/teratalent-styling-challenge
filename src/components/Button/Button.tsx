import "./Button.scss"

interface ButtonProps {
  variant: "default" | "icon"
}

const Button = (props: ButtonProps) => {
  const { variant } = props

  return (
    <button type="button" className={`button button__${variant}`}>
      {variant === "default" && (
        <div className="button__text">This is a one line button</div>
      )}
      {variant === "icon" && ""}
    </button>
  )
}

export default Button
