import React, { useState, useRef, useEffect } from "react";
import start_screen from "../assets/images/start.png"

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
      question: "Trang phục của dân tộc trong các bức ảnh là của dân tộc nào?",
      answers: [
        { text: "Ê-đê", correct: true },
        { text: "Ba-na", correct: false },
        { text: "Ja-rai", correct: false },
        { text: "Tày", correct: false },
      ],
    },
    {
      question: "Hình thức văn xuôi tự sự (có quy mô lớn, sử dụng ngôn ngữ có vần nhịp, kiểu văn xuôi, văn vần hoặc kết hợp cả hai) là:",
      answers: [
        { text: "Thần Thoại", correct: false },
        { text: "Sử thi", correct: true },
        { text: "Cổ Tích", correct: false },
        { text: "Truyền Thuyết", correct: false },
      ],
    },
    {
      question: "Xưng hô “Diêng” trong sử thi Đăm Săn có nghĩa là gì?",
      answers: [
        { text: "Kẻ Thù ", correct: false },
        { text: "Vợ Chồng ", correct: false },
        { text: "Bạn Bè Thân Thiết, Gắn Bó Như Anh Em", correct: true },
        { text: "Anh Em Trong Gia Đình", correct: false },
      ],
    },
    {
      question: "Hành trình đến nhà Nữ Thần Mặt Trời của Đăm Săn trải qua:",
      answers: [
        { text: "Nhiều Điều Thú Vị", correct: false },
        { text: "Nhàn Nhã", correct: false },
        { text: "Nhiều Khó Khăn", correct: true },
        { text: "Thuận Lợi", correct: false },
      ],
    },
    {
      question: "Đăm Par Kvây đã làm gì khi Đăm Săn có ý định  đi bắt Nữ thần Mặt Trời về làm vợ?",
      answers: [
        { text: "Cổ vũ Đăm Săn hãy cố gắng hết sức mình để cưới được Nữ Thần Mặt Trời", correct: false },
        { text: "Suy nghĩ, đưa ra một số kế hoạch và khuyên Đăm Săn làm theo", correct: false },
        { text: "Ngăn cảm Đăm Săn không nên mạo hiểm đi vào chốn rừng thiên nước độc", correct: true },
        { text: "Im lặng. Không khuyên nhủ gì", correct: false },
      ],
    },
    {
      question: "Phản ứng của Đăm Săn khi Đăm Par Kvây ngăn cản:",
      answers: [
        { text: "Lo Lắng, Phản Ứng Yếu Đuối", correct: false },
        { text: "Buồn Bã, Do Dự, Băng Khoăng", correct: false },
        { text: "Quyết Tâm Đi, Không Sợ Hãi", correct: true },
        { text: "Không Bộc Lộ Thái Độ Gì", correct: false },
      ],
    },
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
    <div className="w-full h-full bg-black text-white flex flex-col items-center">
      {/* Audio nhạc nền (có thể thay link nhạc) */}
      <audio ref={audioRef} src="https://www.mboxdrive.com/wwtbam-intro.mp3" loop />

      {!isStarted ? (
        // Màn hình chờ Start
        <div 
          className="flex flex-col  items-center justify-center w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${start_screen})` }}
        >
          <button
            onClick={handleStartGame}
            className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500 transition bottom-200px mt-[600px]"
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
