const StepMessage = ({ step, children }) => {
  return (
    <p className="message">
      <h3>Step {step}</h3>
      {children}
    </p>
  );
};

export default StepMessage;
