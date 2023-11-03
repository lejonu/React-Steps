import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑"
];

function App() {
  // a hook only can be used in the top level of the component function
  // not inside a if statement or inside another function o inside aloop
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep(step => step - 1);
  }

  function handleNext() {
    if (step < 3) setStep(step => step + 1);
  }

  return (
    <>
      <button
        className="close"
        onClick={() => setIsOpen(isOpen => !isOpen)}
      >
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>
              1
            </div>
            <div className={step >= 2 ? "active" : ""}>
              2
            </div>
            <div className={step === 3 ? "active" : ""}>
              3
            </div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{
                backgroundColor: "#7950f2",
                color: "#fff"
              }}
              onClick={handlePrevious}
              // onMouseEnter={() => alert("Mouse")}
            >
              Previous
            </button>
            <button
              style={{
                backgroundColor: "#7950f2",
                color: "#fff"
              }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
