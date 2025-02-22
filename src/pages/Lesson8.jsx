import React, { useState, useRef, useEffect } from "react";

const Lesson8 = () => {
  // Trạng thái: đã bấm start game hay chưa
  const [isStarted, setIsStarted] = useState(false);

  // Chỉ số câu hỏi hiện tại
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Trạng thái kết thúc game hoặc số tiền đạt được có thể bổ sung sau
  // const [earnedMoney, setEarnedMoney] = useState("$0");
  // const [gameOver, setGameOver] = useState(false);

  // Mảng câu hỏi minh hoạ
  const questions = [
    {
      question: "Đâu là bộ sử thi của dân tộc Ê Đê?",
      answers: [
        { text: "Đẻ đất đẻ nước", correct: false },
        { text: "Đăm Săn", correct: true },
        { text: "Cây nêu thần", correct: false },
        { text: "Giống nhà làm mồ", correct: false },
      ],
    },
    {
      question: "Việt Nam có bao nhiêu dân tộc anh em?",
      answers: [
        { text: "45", correct: false },
        { text: "54", correct: true },
        { text: "64", correct: false },
        { text: "63", correct: false },
      ],
    },
    // Thêm nhiều câu hỏi khác...
  ];

  // Mảng mức tiền thưởng
  const moneyPyramid = [
    { id: 1, amount: "$100" },
    { id: 2, amount: "$200" },
    { id: 3, amount: "$300" },
    { id: 4, amount: "$500" },
    { id: 5, amount: "$1,000" },
    { id: 6, amount: "$2,000" },
    { id: 7, amount: "$4,000" },
    { id: 8, amount: "$8,000" },
    { id: 9, amount: "$16,000" },
    { id: 10, amount: "$32,000" },
    { id: 11, amount: "$64,000" },
    { id: 12, amount: "$125,000" },
    { id: 13, amount: "$250,000" },
    { id: 14, amount: "$500,000" },
    { id: 15, amount: "$1,000,000" },
  ].reverse(); 
  // reverse() để hiển thị từ trên xuống: 1 triệu ở trên cùng

  // Audio ref cho nhạc nền (nếu muốn tự động phát khi vào trang)
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Giảm âm lượng tuỳ ý
    }
  }, []);

  // Xử lý nhấn Start
  const handleStartGame = () => {
    setIsStarted(true);
    // Phát nhạc nền (nếu muốn bắt đầu lúc nhấn start)
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  // Xử lý khi chọn đáp án
  const handleAnswerClick = (answer) => {
    if (answer.correct) {
      // Nếu đúng => sang câu tiếp theo
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        // Hết câu hỏi => game kết thúc
        alert("Chúc mừng! Bạn đã trả lời hết câu hỏi!");
        // setGameOver(true);
      }
    } else {
      // Sai => game over
      alert("Bạn đã trả lời sai. Game Over!");
      // setGameOver(true);
      // Tạm thời reset game
      setIsStarted(false);
      setCurrentQuestion(0);
      // Nếu muốn dừng nhạc
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  };

  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col items-center p-4">
      {/* Audio nhạc nền (có thể thay link nhạc) */}
      <audio ref={audioRef} src="https://www.mboxdrive.com/wwtbam-intro.mp3" loop />

      {!isStarted ? (
        // Màn hình chờ Start
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl mb-4">AI LÀ TRIỆU PHÚ</h1>
          <button
            onClick={handleStartGame}
            className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500 transition"
          >
            Start
          </button>
        </div>
      ) : (
        // Màn hình câu hỏi
        <div className="flex w-full max-w-5xl mt-4">
          {/* Phần câu hỏi & đáp án */}
          <div className="flex-1 flex flex-col justify-between">
            <div className="text-xl mb-4">
              Câu {currentQuestion + 1}: {questions[currentQuestion].question}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {questions[currentQuestion].answers.map((ans, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(ans)}
                  className="bg-gray-700 py-2 px-4 rounded hover:bg-gray-600"
                >
                  {ans.text}
                </button>
              ))}
            </div>
          </div>

          {/* Cột hiển thị mức tiền */}
          <div className="w-48 ml-8 bg-gray-800 p-4 rounded">
            <ul className="space-y-2">
              {moneyPyramid.map((m) => (
                <li
                  key={m.id}
                  className={`p-2 rounded ${
                    m.id === questions.length - currentQuestion
                      ? "bg-yellow-500 text-black font-bold"
                      : "bg-gray-700"
                  }`}
                >
                  {m.amount}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lesson8;
