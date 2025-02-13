import Button from "../Button/Button"
import "./FirmFactCard.scss"

interface FirmFactCardProps {
  variant: "default" | "border"
}

const FirmFactCard = (props: FirmFactCardProps) => {
  const variation = props.variant

  return (
    <div className={`card card-${variation}`}>
      <Button variant="default" />
    </div>
  )
}

export default FirmFactCard
