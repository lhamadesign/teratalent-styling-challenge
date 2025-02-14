import { ReactNode } from "react"
import "./FirmFactCard.scss"

interface FirmFactCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant: "default" | "border"
  children: ReactNode
}

const FirmFactCard = (props: FirmFactCardProps) => {
  const { variant, children, ...rest } = props

  return (
    <div className={`card card-${variant}`} {...rest}>
      {children}
    </div>
  )
}

export default FirmFactCard
