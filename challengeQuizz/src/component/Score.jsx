// score.jsx
import React, { useContext } from 'react';
import { QuizzContext } from '../context/quizzContext.jsx';

function Score() {
    const { state, dispatch } = useContext(QuizzContext);

    return (
        <div className="results" style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Quiz terminé !</h2>
            <p>Votre score : {state.score} / {state.questions.length}</p>
            <button onClick={() => dispatch({ type: 'RESET_QUIZ' })}>
                Redémarrer le quiz
            </button>
        </div>
    );
}

export default Score;
