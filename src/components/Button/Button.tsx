import React from "react"
import "./Button.scss"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "default" | "icon"
}

const Button = (props: ButtonProps) => {
  const { variant, ...rest } = props

  return (
    <button type="button" className={`button button__${variant}`} {...rest}>
      {variant === "default" && (
        <div className="button__text">This is a one line button</div>
      )}
      {variant === "icon" && (
        <div className="button__grid">
          <div className="icon">
            <img src="../../public/search-icon.svg" />
          </div>
          <div className="button__text">
            This is a two line button that terminates with (ellipsis)
          </div>
        </div>
      )}
    </button>
  )
}

export default Button
