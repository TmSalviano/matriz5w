import useCardState from "../data/hooks/useCardState";
import "../styles/Card.css";

export default function Card({titulo, perguntas}) {
    const {
        step,setStep, direction, setDirection, formData, setFormData, 
        handleChange, handleNext, handlePrev, handleSubmit, 
        currentField, progress, totalSteps
       } = useCardState();

  return (
    <div className="outer-box">
      <div className="form-container">
        <h1 className="form-title">{titulo}</h1>
        <form onSubmit={handleSubmit}>
          {/* Barra de progresso */}
          <div className="progress-bar">
            <div
              className={`progress ${direction === "reverse" ? "reverse" : ""}`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Campo atual */}
          <div>
            <label>{currentField.label}</label>
            <input
              type={currentField.type || "text"}
              name={currentField.name}
              value={formData[currentField.name]}
              onChange={handleChange}
              placeholder={currentField.placeholder}
            />
          </div>

          {/* Botões de navegação */}
          <div className="navigation-buttons">
            {step > 0 && (
              <button type="button" onClick={handlePrev}>
                Anterior
              </button>
            )}
            {step < totalSteps - 1 ? (
              <button type="button" onClick={handleNext}>
                Próximo
              </button>
            ) : (
              <button type="submit">Enviar</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
