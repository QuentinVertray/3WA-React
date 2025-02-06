// Timer.jsx
import React, { useContext, useEffect } from 'react';
import { QuizzContext } from '../context/quizzContext.jsx';

function Timer() {
    const { state, dispatch } = useContext(QuizzContext);

    useEffect(() => {
        // Ne rien faire si le quiz n'est pas lancé ou si une réponse a déjà été sélectionnée.
        if (!state.quizStarted || state.selectedAnswer !== null) return;

        if (state.timeLeft <= 0) {
            // Lorsque le temps est écoulé, on passe à la question suivante.
            dispatch({ type: 'NEXT_QUESTION' });
            return;
        }

        const timerId = setTimeout(() => {
            dispatch({ type: 'TICK' });
        }, 1000);

        return () => clearTimeout(timerId);
    }, [state.timeLeft, state.quizStarted, state.selectedAnswer, dispatch]);

    return (
        <div style={{ marginBottom: '20px' }}>
            Temps restant : {state.timeLeft} seconde{state.timeLeft > 1 ? 's' : ''}
        </div>
    );
}

export default Timer;
