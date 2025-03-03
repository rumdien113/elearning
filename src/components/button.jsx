const ArrowButton = ({ text, onClick, className = "" }) => {
  return (
    <button
      className={`
        text-white
        px-6 py-2
        hover:bg-blue-700
        transition
        flex items-center
        justify-center
        text-2xl
        ${className}
      `}
      style={{
        backgroundColor: "#2541eb",
        // clipPath: "polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)",
        clipPath: "polygon(5% 0%, 95% 0%, 100% 50%, 95% 100%, 5% 100%, 0% 50%)",
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ArrowButton;
