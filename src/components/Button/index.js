function Button({ text, onClick, disabled }) {
  return (
    <button
      className={'btn' + (disabled ? ' btn--disabled' : '')}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;
