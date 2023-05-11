import React, { useState } from "react";
import "./alkoholtest.css";

const questions = [
  {
    id: 1,
    question:
      "Haben Sie in den letzten 12 Monaten öfter erlebt, dass Sie nicht mehr mit dem Trinken aufhören konnten, nachdem Sie einmal begonnen hatten?",
    answers: ["Ja", "Nein"],
  },
  {
    id: 2,
    question:
      "Hatten Sie während der letzten 12 Monate wegen Ihrer Trinkgewohnheiten öfter Schuldgefühle oder Gewissensbisse?",
    answers: ["Ja", "Nein"],
  },
  {
    id: 3,
    question:
      "Kam es während der letzten 12 Monate öfter vor, dass Sie sich nicht mehr an den vorangegangenen Abend erinnern konnten, weil Sie getrunken hatten?",
    answers: ["Ja", "Nein"],
  },
  {
    id: 4,
    question:
      "Hat in den letzten 12 Monaten jemand aus Ihrem Verwandten- oder Freundeskreis oder ein Arzt bzw. eine Ärztin schon einmal Bedenken wegen Ihres Trinkverhaltens geäußert oder vorgeschlagen, dass Sie Ihren Alkoholkonsum einschränken?",
    answers: ["Ja", "Nein"],
  },
  {
    id: 5,
    question: "Trinken Sie für gewöhnlich Täglich?",
    answers: ["Ja", "Nein"],
  },
];

const Alkoholtest = () => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));
  const [popupColor, setPopupColor] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswer = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answer;
    setAnswers(newAnswers);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    const numYesAnswers = answers.filter((answer) => answer === "Ja").length;
    if (numYesAnswers === 0) {
      setPopupColor("green");
    } else if (numYesAnswers >= 1 && numYesAnswers <= 3) {
      setPopupColor("orange");
    } else {
      setPopupColor("red");
    }
  };

  const handleReset = () => {
    setAnswers(Array(questions.length).fill(""));
    setPopupColor("");
    setCurrentQuestionIndex(0);
  };

  return (
    <div>
      {currentQuestionIndex < questions.length && (
        <div>
          <p>{questions[currentQuestionIndex].question}</p>
          <button className="answer-yes" onClick={() => handleAnswer("Ja")}>
            Ja
          </button>
          <button className="answer-no" onClick={() => handleAnswer("Nein")}>
            Nein
          </button>
        </div>
      )}
      {popupColor === "green" && (
        <div className="box-green" style={{ backgroundColor: "green" }}>
          <h2>Alles in Ordnung</h2>
          <p>
            Es gibt keinen Grund zur Sorge. Aber denken Sie daran,
            verantwortungsvoll mit Alkohol umzugehen und wenn Sie Probleme
            haben, Hilfe zu suchen.
          </p>
        </div>
      )}
      {popupColor === "orange" && (
        <div className="box-orange">
          <h2>Es besteht ein Risiko</h2>
          <p>
            Es sieht so aus, als ob Sie in einigen Situationen dazu neigen, zu
            viel zu trinken. Es könnte eine gute Idee sein, darüber
            nachzudenken, wie Sie mit diesen Situationen umgehen können, und
            sich gegebenenfalls Hilfe zu suchen.
          </p>
        </div>
      )}
      {popupColor === "red" && (
        <div className="box-red" style={{ backgroundColor: "red" }}>
          <h2>Gefahr im Verzug</h2>
          <p>
            Ihr Alkoholkonsum ist besorgniserregend. Es ist dringend empfohlen,
            professionelle Hilfe in Anspruch zu nehmen, um Ihr Trinkverhalten zu
            ändern und gesünder zu leben.
          </p>
        </div>
      )}
      {popupColor && (
        <button className="reset-button" onClick={() => handleReset()}>
          Test wiederholen
        </button>
      )}
    </div>
  );
};

export default Alkoholtest;
