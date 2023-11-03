const Button = ({
  bgColor,
  textColor,
  onClick,
  children
}) => {
  // console.log(bgColor);
  return (
    <button
      style={{
        backgroundColor: bgColor,
        color: textColor
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
