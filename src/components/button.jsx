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
        ${className}
      `}
      style={{
        // Màu nền của nút
        backgroundColor: "#2563eb",
        // Cắt hình dạng mũi tên
        clipPath: "polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)",
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ArrowButton;
