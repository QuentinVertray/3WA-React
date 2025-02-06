// SelectionButton.jsx
import React, { useContext } from 'react';
import { QuizzContext } from '../context/quizzContext.jsx';

function SelectionButton({ option }) {
    const { state, dispatch } = useContext(QuizzContext);
    const currentQuestionObj = state.questions[state.currentQuestion];
    const isAnswered = state.selectedAnswer !== null;
    const isCorrectOption = option === currentQuestionObj.correctAnswer;
    const isSelected = state.selectedAnswer === option;

    // Définition du style du bouton selon la réponse
    let borderStyle = {};
    if (isAnswered) {
        if (isCorrectOption) {
            borderStyle = { border: '2px solid green' };
        }
        if (isSelected && !isCorrectOption) {
            borderStyle = { border: '2px solid red' };
        }
    }

    const handleClick = () => {
        // N'enregistre la réponse que si aucune n'a déjà été sélectionnée
        if (!isAnswered) {
            dispatch({ type: 'ANSWER', payload: option });
        }
    };

    return (
        <button
            onClick={handleClick}
            disabled={isAnswered}  // désactivation du bouton si une réponse a été donnée
            style={{ margin: '5px', padding: '10px 15px', ...borderStyle }}
        >
            {option}
        </button>
    );
}

export default SelectionButton;
