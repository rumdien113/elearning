import { useState, useRef, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import ArrowButton from "../components/button"
import Question from "../components/question";

import start_screen from "../assets/images/start.png"
import background_screen from "../assets/images/background.png"
import question_5 from "../assets/images/question_5.jpg"

import question_list from "./question";
import money_list from "./money";

import start_audio from "../assets/audio/start.mp3";
import question_audio from "../assets/audio/question.mp3";

const Lesson8 = () => {
  const [isStarted, setIsStarted] = useState(false); // Start game
  const [isQuestionPlaying, setIsQuestionPlaying] = useState(false); // Question playing
  const [currentQuestion, setCurrentQuestion] = useState(0); // Current question
  const timeoutRef = useRef(null) // Timeout

  const startRef = useRef(null); // Start audio
  const questionRef = useRef(null) // Question audio

  // Audio background for start screen
  useEffect(() => {
    if (!isStarted && startRef.current)
      startRef.current.play().catch((error) => {
        console.error("Error: ", error);
      })
    return () => {
      if (startRef.current) {
        startRef.current.pause();
        startRef.current.currentTime = 0;
      }
    }
  }, [isStarted])

  // initial volume
  useEffect(() => {
    if (startRef.current) startRef.current.volume = 0.3;
    if (questionRef.current) questionRef.current.volume = 0.3;
  })

  // Handle start game
  const handleStartGame = () => {
    setIsStarted(true)

    if (startRef.current) {
      startRef.current.pause();
      startRef.current.currentTime = 0;
    }
  }


  // play question audio
  const playQuestion = () => {
    if (!questionRef.current) return;

    try {
      questionRef.current.currentTime = 0;
      questionRef.current.play()
      setIsQuestionPlaying(true)

      timeoutRef.current = setTimeout(() => {
        if (questionRef.current) {
          questionRef.current.pause();
          setIsQuestionPlaying(false)
        }
      }, 30000)
    } catch (error) {
      console.error("Audio Error: ", error)
    }
  }
  // Question
  const handleAnswerClick = (answer) => {
    // audio
    if (questionRef.current)
      questionRef.current.pause();
    clearTimeout(timeoutRef.current)
    setIsQuestionPlaying(false)

    // login ABCD
    if (answer.correct) {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < question_list.length) {
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
      document.getElementById('my_modal_1').showModal()
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder="false" />
      <dialog id="my_modal_1" className="modal bg-opacity-25">
        <div className="modal-box">
          <h3 className="font-bold text-2xl">Trả lời sai!</h3>
          <div className="py-4">
            <p className="text-xl mb-4">
              Số tiền hiện tại của bạn: {money_list[currentQuestion]?.amount || "$0"}
            </p>
            <div className="flex flex-col gap-2">
              <p>Bạn muốn:</p>
            </div>
          </div>
          <div className="modal-action flex justify-between">
            <button
              className="btn btn-error"
              onClick={() => {
                // Reset toàn bộ game
                setIsStarted(false);
                setCurrentQuestion(0);
                document.getElementById('my_modal_1').close();
              }}
            >
              Dừng chơi
            </button>

            <button
              className="btn btn-warning"
              onClick={() => {
                // Tiếp tục với câu hỏi hiện tại
                document.getElementById('my_modal_1').close();
                if (questionRef.current) {
                  questionRef.current.currentTime = 0;
                  questionRef.current.play();
                }
              }}
            >
              Thử lại
            </button>

            <button
              className="btn btn-success"
              onClick={() => {
                // Chuyển sang câu hỏi tiếp theo
                document.getElementById('my_modal_1').close();
                const nextQuestion = currentQuestion + 1;
                if (nextQuestion < question_list.length) {
                  setCurrentQuestion(nextQuestion);
                }
              }}
            >
              Bỏ qua
            </button>
          </div>
        </div>
      </dialog>
      <div className="w-full h-full bg-black text-white flex flex-col items-center">
        {/* Các element audio */}
        <audio ref={startRef} src={start_audio} loop />
        <audio ref={questionRef} src={question_audio} />

        {!isStarted ? (
          // Màn hình bắt đầu
          <div
            className="flex flex-col items-center justify-center w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${start_screen})` }}
          >
            <ArrowButton
              text="Bắt đầu"
              onClick={handleStartGame}
              className="mt-[650px] text-2xl bold"
            />
          </div>
        ) : (
          <div className="w-full h-full  relative overflow-hidden text-white">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${background_screen})` }}
            />
            <div className="absolute inset-0 bg-black/60" />

            {/* Nội dung chính */}
            <div className="relative z-10 flex h-full w-full">
              {/* Khu vực câu hỏi và đáp án */}
              <div className={`flex-1 flex flex-col justify-center mr-4 px-32 ${question_list[currentQuestion].image ? 'gap-16' : ''}`}>
                <Question>
                  Câu {currentQuestion + 1}: {question_list[currentQuestion].question}
                </Question>

                {question_list[currentQuestion].image && (
                  <div className="flex justify-center mt-4">
                    <img
                      src={question_list[currentQuestion].image}
                      alt="Question"
                      className="w-110 h-110 object-contain rounded"
                    />
                  </div>
                )}

                <div className={`grid grid-cols-2 gap-4 ${!question_list[currentQuestion].image ? 'mt-[530px]' : ''}`}>
                  {question_list[currentQuestion].answers.map((ans, index) => (
                    <ArrowButton
                      key={index}
                      onClick={() => handleAnswerClick(ans)}
                      className="bg-gray-700 py-2 px-4 rounded hover:bg-gray-600"
                      text={ans.text}
                    />
                  ))}
                </div>
                <ArrowButton
                  onClick={playQuestion}
                  className="justify-center mt-4 text-3xl"
                  text={"Bắt đầu"}
                  disabled={isQuestionPlaying}
                />

              </div>
              <div className="w-64 bg-gray-800 p-4 rounded flex flex-col justify-start relative">
                <ul className="space-y-2">
                  {money_list.map((m) => (
                    <li
                      key={m.id}
                      className={`p-2 rounded ${m.id === question_list.length - currentQuestion
                        ? "bg-yellow-500 text-black font-bold"
                        : "bg-gray-700"
                        }`}
                    >
                      {m.amount}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center gap-4 inset-x-0 bottom-8 absolute">
                  <button
                    className="btn btn-error"
                    onClick={() => {
                      // Tiếp tục với câu hỏi hiện tại
                      document.getElementById('my_modal_1').close();
                      const preQuestion = currentQuestion - 1;
                      if (preQuestion >= 0) {
                        setCurrentQuestion(preQuestion);
                      }
                    }}
                  >
                    Quay lại
                  </button>

                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      // Chuyển sang câu hỏi tiếp theo
                      document.getElementById('my_modal_1').close();
                      const nextQuestion = currentQuestion + 1;
                      if (nextQuestion < question_list.length) {
                        setCurrentQuestion(nextQuestion);
                      }
                    }}
                  >
                    Tiếp tục
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );

};

export default Lesson8;