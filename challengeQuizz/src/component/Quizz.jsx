// quizz.jsx
import React, { useContext } from 'react';
import { QuizzContext } from '../context/quizzContext.jsx';
import Question from './question';
import Score from './score';
import Timer from './Timer';

function Quizz() {
    const { state, dispatch } = useContext(QuizzContext);

    // Écran d'accueil
    if (!state.quizStarted) {
        return (
            <div className="welcome-screen" style={{ textAlign: 'center', marginTop: '50px' }}>
                <h1>Bienvenue au Quiz !</h1>
                <button
                    onClick={() => dispatch({ type: 'START_QUIZ' })}
                    style={{ fontSize: '16px', padding: '10px 20px' }}
                >
                    Commencer le quiz
                </button>
            </div>
        );
    }

    // Fin du quiz
    if (state.currentQuestion >= state.questions.length) {
        return <Score />;
    }

    // Vérification si on est sur la dernière question
    const isLastQuestion = state.currentQuestion === state.questions.length - 1;

    return (
        <div className="quiz-container" style={{ textAlign: 'center', marginTop: '50px' }}>
            <Timer />
            <Question />
            <div style={{ marginTop: '20px' }}>
                <button
                    onClick={() => dispatch({ type: 'NEXT_QUESTION' })}
                    // Le bouton est désactivé tant qu'aucune réponse n'a été sélectionnée (et que le temps n'est pas écoulé)
                    disabled={state.selectedAnswer === null && state.timeLeft > 0}
                >
                    {isLastQuestion ? "Terminer le quizz" : "Passer à la question suivante"}
                </button>
            </div>
        </div>
    );
}

export default Quizz;
