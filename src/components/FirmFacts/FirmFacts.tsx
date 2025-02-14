import Button from "../Button/Button"
import FirmFactCard from "../FirmFactCard/FirmFactCard"
import "./FirmFacts.scss"

const FirmFacts = () => {
  return (
    <div className="firm-facts__container">
      <button type="button" className="close-button">
        <img src="../../close-icon.svg" className="close-button__icon" />
      </button>

      <h1 className="title">Firm Facts</h1>
      <section className="content-grid">
        <FirmFactCard variant="default">
          <Button variant="icon" />
        </FirmFactCard>
        <FirmFactCard variant="default">
          <Button variant="icon" />
        </FirmFactCard>
        <FirmFactCard variant="default">
          <Button variant="default" />
        </FirmFactCard>
        <FirmFactCard variant="default">
          <Button variant="icon" />
        </FirmFactCard>
        <FirmFactCard variant="border">
          <Button variant="icon" />
        </FirmFactCard>
        <FirmFactCard variant="border">
          <Button variant="icon" disabled />
        </FirmFactCard>
        <FirmFactCard variant="border">
          <Button variant="icon" />
        </FirmFactCard>
      </section>
    </div>
  )
}

export default FirmFacts
