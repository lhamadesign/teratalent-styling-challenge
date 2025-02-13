import "./FirmFacts.scss"

const FirmFacts = () => {
  return (
    <div className="firm-facts__container">
      <button type="button" className="close-button">
        <img src="../../close-icon.svg" className="close-button__icon" />
      </button>

      <h1 className="title">Firm Facts</h1>
      <section className="content-grid"></section>
    </div>
  )
}

export default FirmFacts
