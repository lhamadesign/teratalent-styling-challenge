import "./FirmFactCard.scss"

interface FirmFactCardProps {
  variation: "default" | "border"
}

const FirmFactCard = (props: FirmFactCardProps) => {
  const variation = props.variation

  return (
    <div className={`card card-${variation}`}>
      <div
        style={{
          display: "flex",
          gap: "8px",
          justifyContent: "space-around",
          alignItems: "center",
          width: "300px",
        }}
      >
        <img src="../../public/search-icon.svg" />
        <span>fsjigb osng sjogdn dojfnsdofjsn</span>
      </div>
    </div>
  )
}

export default FirmFactCard
