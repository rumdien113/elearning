const Question = ({ children }) => {
  return (
    <div
      className={`
        text-white
        px-28 py-2
        hover:bg-blue-700
        transition
        flex items-center
        justify-center
        w-full
        text-2xl
      `}
      style={{
        backgroundColor: "#2541eb",
        // clipPath: "polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)",
        clipPath: "polygon(7% 0%, 93% 0%, 95% 50%, 93% 100%, 7% 100%, 5% 50%)",
      }}
    >
      {children}
    </div>
  );
};

export default Question;
