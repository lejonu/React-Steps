import { useState } from "react";
import Button from "./Button";
import StepMessage from "./StepMessage";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 💰 "
];

const Steps = props => {
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

          <StepMessage step={step}>
            {messages[step - 1]}
          </StepMessage>

          <div className="buttons">
            <Button
              bgColor="#7950f2"
              textColor="#fff"
              onClick={handlePrevious}
            >
              <span>👈️ Previous</span>
            </Button>
            <Button
              bgColor={`#7950f2`}
              textColor="#fff"
              onClick={handleNext}
            >
              <span>Next 👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Steps;
