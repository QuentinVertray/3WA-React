// App.jsx (ou index.js)
import React from 'react';
import './style/style.css';
import { QuizzProvider } from './context/quizzContext.jsx';
import Quizz from './component/Quizz.jsx';

function App() {
    return (
        <QuizzProvider>
            <Quizz />
        </QuizzProvider>
    );
}

export default App;
