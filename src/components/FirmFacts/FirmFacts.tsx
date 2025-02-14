import { JSX } from "react"
import Button from "../Button/Button"
import FirmFactCard from "../FirmFactCard/FirmFactCard"
import "./FirmFacts.scss"

const FirmFacts = () => {
  const buttonsToRender: JSX.Element[] = [
    <Button variant="icon" />,
    <Button variant="icon" />,
    <Button variant="default" />,
    <Button variant="icon" />,
    <Button variant="icon" />,
    <Button variant="icon" disabled />,
    <Button variant="icon" />,
  ]

  return (
    <div className="firm-facts__container">
      <button type="button" className="close-button">
        <img src="../../close-icon.svg" className="close-button__icon" />
      </button>

      <h1 className="title">Firm Facts</h1>
      <section className="content-grid">
        {buttonsToRender.map((button, index) => {
          return (
            <FirmFactCard variant={index > 3 ? "border" : "default"}>
              {button}
            </FirmFactCard>
          )
        })}
      </section>
    </div>
  )
}

export default FirmFacts
