import React, { createContext, useState, useRef, useEffect, useContext } from "react";
import { surveyQuestions } from "../data/data";

const QwestContext = createContext();
export const useQuest = () => useContext(QwestContext);

export const QwestProvider = ({ children }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [max, setMax] = useState(0);
  const [currentOptionSet, setCurrentOptionSet] = useState(0);
  const [fade, setFade] = useState(true);
  const [timer, setTimer] = useState(5);
  const [isPaused, setIsPaused] = useState(false);
  const [showRetakePopup, setShowRetakePopup] = useState(false);
  const [coins, setCoins] = useState([]);
  const [balance, setBalance] = useState(25);
  const timerRef = useRef(null);
  const questionLength = surveyQuestions.length
  const totalOptionSets = Math.ceil(surveyQuestions[currentQuestion]?.options.length / 4);
 const [changeAvatar, setChangeAvatar] = useState(false);

  const startTimer = () => {
    clearInterval(timerRef.current);
    setTimer(5);
    timerRef.current = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
  };

  const togglePause = () => {
    setIsPaused((prev) => {
      if (prev) {
        timerRef.current = setInterval(() => {
          setTimer((prev) => prev - 1);
        }, 1000);
      } else {
        clearInterval(timerRef.current);
      }
      return !prev;
    });
  };

  const endQuiz = () => {
    clearInterval(timerRef.current);
    setCoins([]);
    localStorage.removeItem("questStarted");
    window.location.reload();
  };

  const handleRetake = () => {
    setShowRetakePopup(false); 
    startTimer();
  };

  const handleCancel = () => {
    setShowRetakePopup(false);
    nextQuestion();
  };


  useEffect(()=> {
      setMax(currentQuestion)
  },[currentQuestion])

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    if (timer <= 0) {
      clearInterval(timerRef.current);
      if (selectedAnswers[currentQuestion] == null) {
        setShowRetakePopup(false);
      }
    }
  }, [timer]);

  useEffect(() => {
    if (!isPaused && selectedAnswers[currentQuestion] == null && currentQuestion < surveyQuestions.length) {
      startTimer();
    }
  }, [currentQuestion, isPaused]);

  useEffect(() => {
    setFade(false);
    const timeout = setTimeout(() => setFade(true), 500);
    return () => clearTimeout(timeout);
  }, [currentQuestion, currentOptionSet]);

  const handleSelectedAnswer = (index) => {
    if (selectedAnswers[currentQuestion] == null) {
      setSelectedAnswers({
        ...selectedAnswers,
        [currentQuestion]: index,
      });
      if (timer > 0) {
        updateCoins(0);
        setShowRetakePopup(true);
      } else {
        updateCoins(1);
      }
      clearInterval(timerRef.current);
    } else {
      setSelectedAnswers({
        ...selectedAnswers,
        [currentQuestion]: index,
      });
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < surveyQuestions.length - 1) {
      setCurrentQuestion((next) => {
        const newQuestionIndex = next < surveyQuestions.length - 1 ? next + 1 : next;
        if (selectedAnswers[newQuestionIndex] == null) {
          startTimer();
        }
        return newQuestionIndex;
      });
      setCurrentOptionSet(0);
    } else {
      clearInterval(timerRef.current);
    }
  };

  const prevQuestion = () => {
    setCurrentQuestion((prev) => (prev > 0 ? prev - 1 : prev));
    setMax(currentQuestion)
    setCurrentOptionSet(0);
  };

  const handleNextOptionSet = () => {
    setCurrentOptionSet((next) => (next < totalOptionSets - 1 ? next + 1 : next));
  };

  const handlePrevOptionSet = () => {
    setCurrentOptionSet((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const updateCoins = (coin) => {
    setCoins((prevCoins) => [...prevCoins, coin]);
  };

  const progress = (currentQuestion / surveyQuestions.length) * 100;

  return (
    <QwestContext.Provider
      value={{
        selectedAnswers,
        currentQuestion,
        questionLength,
        currentOptionSet,
        fade,
        timer,
        isPaused,
        coins,
        balance,
        timerRef,
        showRetakePopup,
        progress,
        max,
        startTimer,
        togglePause,
        endQuiz,
        handleSelectedAnswer,
        nextQuestion,
        prevQuestion,
        handleNextOptionSet,
        handlePrevOptionSet,
        updateCoins,
        setSelectedAnswers,
        setCurrentQuestion,
        setCurrentOptionSet,
        setFade,
        setTimer,
        setIsPaused,
        setCoins,
        setBalance,
        handleRetake,
        handleCancel,
        changeAvatar, 
        setChangeAvatar,
      }}
    >
      {children}
    </QwestContext.Provider>
  );
};
