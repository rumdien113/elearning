const Question = ({ children }) => {
  return (
    <div
      className={`
        text-white
        px-6 py-2
        hover:bg-blue-700
        transition
        flex items-center
        justify-center
      `}
      style={{
        backgroundColor: "#2563eb",
        clipPath: "polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)",
      }}
    >
      {children}
    </div>
  );
};

export default Question;