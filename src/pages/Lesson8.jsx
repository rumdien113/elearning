import { useState, useRef, useEffect } from "react";
import start_screen from "../assets/images/start.png"
import background_screen from "../assets/images/background.png"
import { Toaster, toast } from "react-hot-toast";
import ArrowButton from "../components/button"
import Question from "../components/question";
const Lesson8 = () => {
  const [isStarted, setIsStarted] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Trạng thái kết thúc game hoặc số tiền đạt được có thể bổ sung sau
  // const [earnedMoney, setEarnedMoney] = useState("$0");
  // const [gameOver, setGameOver] = useState(false);

  const questions = [
    {
      question: "Tác giả Nguyễn Văn Huyên giữ chức Bộ trưởng Bộ Giáo dục từ năm nào?",
      answers: [
        { text: "1945", correct: false },
        { text: "1946", correct: true },
        { text: "1950", correct: false },
        { text: "1955", correct: false },
      ],
    },
    {
      question: "Văn bản Nghệ thuật truyền thống của người Việt được trích từ cuốn sách nào?",
      answers: [
        { text: "Văn minh Việt Nam", correct: true },
        { text: "Nghệ thuật học Việt Nam", correct: false },
        { text: "Lịch sử văn minh Việt Nam", correct: false },
        { text: "Lịch sử Việt Nam", correct: false },
      ],
    },
    {
      question: "Yếu tố nào được sử dụng trong chi tiết “đồ nữ trang được chế tác với một sự tinh tế và đa dạng vô song”?",
      answers: [
        { text: "Tự sự", correct: false },
        { text: "Biểu cảm", correct: true },
        { text: "Miêu tả", correct: false },
        { text: "Nghị luận", correct: false },
      ],
    },
    {
      question: "Đâu là bộ sử thi của dân tộc Ê-Đê?",
      answers: [
        { text: "Đẻ đất đẻ nước", correct: false },
        { text: "Đăm Săn", correct: true },
        { text: "Cây nêu thần", correct: false },
        { text: "Giông nhà làm mồ", correct: false },
      ],
    },
    {
      question: "Trang phục của dân tộc trong các bức ảnh là của dân tộc nào?",
      answers: [
        { text: "Ê ĐÊ", correct: true },
        { text: "BA NA", correct: false },
        { text: "JA RAI", correct: false },
        { text: "TÀY", correct: false },
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
        { text: "Kẻ Thù", correct: false },
        { text: "Vợ Chồng", correct: false },
        { text: "Bạn Bè Thân Thiết, Gắn Bó Như Anh Em", correct: true },
        { text: "Anh Em Trong Gia Đình", correct: false },
      ],
    },
    {
      question: "Hành trình đến nhà Nữ Thần Mặt Trời của Đăm Săn trải qua:",
      answers: [
        { text: "Nhiều điều thú vị", correct: false },
        { text: "Nhiều may mắn", correct: false },
        { text: "Nhiều khó khăn", correct: true },
        { text: "Nhiều thuận lợi", correct: false },
      ],
    },
    {
      question: "Đăm Par Kvây đã làm gì khi Đăm Săn có ý định đi bắt Nữ Thần Mặt Trời về làm vợ?",
      answers: [
        { text: "Cổ vũ Đăm Săn hãy cố gắng hết sức mình để cưới được Nữ Thần Mặt Trời", correct: false },
        { text: "Suy nghĩ, đưa ra một số kế hoạch và khuyên Đăm Săn làm theo", correct: false },
        { text: "Ngăn cản Đăm Săn không nên mạo hiểm đi vào chốn rừng thiêng nước độc", correct: true },
        { text: "Im lặng. Không khuyên nhủ gì", correct: false },
      ],
    },
    {
      question: "Phản ứng của Đăm Săn khi Đăm Par Kvây ngăn cản:",
      answers: [
        { text: "Lo lắng, phản ứng yếu đuối", correct: false },
        { text: "Buồn bã, do dự, băn khoăn", correct: false },
        { text: "Quyết tâm đi, không sợ hãi", correct: true },
        { text: "Không bộc lộ thái độ gì", correct: false },
      ],
    },
  ];

  const moneyPyramid = [
    { id: 1, amount: "$10,000" },
    { id: 2, amount: "$8,000" },
    { id: 3, amount: "$6,000" },
    { id: 4, amount: "$4,000" },
    { id: 5, amount: "$2,000" },
    { id: 6, amount: "$1,000" },
    { id: 7, amount: "$500" },
    { id: 8, amount: "$300" },
    { id: 9, amount: "$200" },
    { id: 10, amount: "$100" },
  ];

  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  }, []);

  const handleStartGame = () => {
    setIsStarted(true);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handleAnswerClick = (answer) => {
    if (answer.correct) {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        toast.success("Chúc mừng! Bạn đã trả lời đúng.");
        setTimeout(() => {
          toast.dismiss();
        }, 500);
        setTimeout(() => {
          toast.success("Câu hỏi tiếp theo...");
        }, 1000);
        setTimeout(() => {
          setCurrentQuestion(nextQuestion);
        }, 1500);
      } else {
        toast.success("Chúc mừng! Bạn đã trả lời đúng hết câu hỏi.");
      }
    } else {
      // alert("Bạn đã trả lời sai.");
      // setGameOver(true);
      // Tạm thời reset game
      // setIsStarted(false);
      // setCurrentQuestion(0);
      document.getElementById('my_modal_1').showModal()
      // Nếu muốn dừng nhạc
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  };


  return (
    <>
      <Toaster position="top-center" reverseOrder="false" />
      <dialog id="my_modal_1" className="modal bg-opacity-25">
        <div className="modal-box">
          <h3 className="font-bold text-2xl">
            Game Over
          </h3>
          <p className="py-4">
            <p className="text-xl">
              Bạn đã trả lời sai. Bạn sẽ nhận được số tiền thưởng là: &nbsp;
              {currentQuestion === 0
                ? "$0"
                // : moneyPyramid.find((m) => m.id === questions.length - currentQuestion + 1).amount}
                : (moneyPyramid.find((m) => m.id === questions.length - currentQuestion + 1)?.amount || "$0")}
            </p>
          </p>
          <div className="modal-action">
            <form method="dialog" className="space-x-5">
              <button
                className="btn"
                onClick={() => {
                  setIsStarted(false);
                  setCurrentQuestion(0);
                  document.getElementById('my_modal_1').close()
                }}
              >
                Chơi lại
              </button>
            </form>
          </div>
        </div>
      </dialog>
      <div className="w-full h-full bg-black text-white flex flex-col items-center">
        <audio ref={audioRef} src="https://www.mboxdrive.com/wwtbam-intro.mp3" loop />
        {!isStarted ? (
          <div
            className="flex flex-col items-center justify-center w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${start_screen})` }}
          >
            <ArrowButton text="Bắt đầu" onClick={handleStartGame} className="mt-[650px]  text-2xl bold" />
          </div>
        ) : (
          <div className="w-full h-screen  relative overflow-hidden text-white">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${background_screen})` }}
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 flex h-full w-full">
              <div className="flex-1 flex flex-col justify-center mr-4 px-32">
                <Question>
                  Câu {currentQuestion + 1}: {questions[currentQuestion].question}
                </Question>
                <div className="grid grid-cols-2 gap-4 mt-[530px]">
                  {questions[currentQuestion].answers.map((ans, index) => (
                    <ArrowButton
                      key={index}
                      onClick={() => handleAnswerClick(ans)}
                      className="bg-gray-700 py-2 px-4 rounded hover:bg-gray-600"
                      text={ans.text}
                    >
                    </ArrowButton>
                  ))}
                </div>
              </div>
              <div className="w-64 bg-gray-800 bg-opacity-90 p-4 rounded flex flex-col justify-start">
                <ul className="space-y-2">
                  {moneyPyramid.map((m) => (
                    <li
                      key={m.id}
                      className={`p-2 rounded ${m.id === questions.length - currentQuestion
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
          </div>
        )}
      </div>
    </>
  );

};

export default Lesson8;
