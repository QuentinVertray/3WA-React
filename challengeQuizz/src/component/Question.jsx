// question.jsx
import React, { useContext } from 'react';
import { QuizzContext } from '../context/quizzContext.jsx';
import SelectionButton from './SelectionButton';

function Question() {
    const { state } = useContext(QuizzContext);
    const currentQ = state.questions[state.currentQuestion];

    return (
        <div className="question">
            <h2>
                Question {state.currentQuestion + 1} sur {state.questions.length}
            </h2>
            <p>{currentQ.question}</p>
            <div>
                {currentQ.options.map((option, index) => (
                    <SelectionButton key={index} option={option} />
                ))}
            </div>
        </div>
    );
}

export default Question;

