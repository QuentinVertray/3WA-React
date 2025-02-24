import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router";
import Lien from "../../component/Lien.jsx";

const JeuPage = ({ state, resetResult, setResult }) => {
    const [experiences, setExperiences] = useState(100);
    const navigate = useNavigate();

    const lancerDes = () => {
        resetResult();
        let count = 0;
        const rolls = [];
        for (let i = 0; i < experiences; i++) {
            const dice1 = Math.floor(Math.random() * 6) + 1;
            const dice2 = Math.floor(Math.random() * 6) + 1;
            const dice3 = Math.floor(Math.random() * 6) + 1;
            const isBrelan = dice1 === 6 && dice2 === 6 && dice3 === 6;
            if (isBrelan) {
                count++;
            }
            rolls.push({ dice1, dice2, dice3, isBrelan });
        }
        setResult({ count, rolls });
        navigate(`stats/${count}`);
    };

    return (
        <div className="page" id="Jeu">
            <h2>Jeu de dés</h2>
            <div>
                <label>Nombre d'expérience : </label>
                <input
                    type="number"
                    value={experiences}
                    onChange={(e) => setExperiences(Number(e.target.value))}
                />
            </div>
            <button onClick={lancerDes}>Lancer</button>
            <div style={{ marginTop: "20px" }}>
                <Lien label="Résultat" to={`stats/${state.result}`} />
            </div>
            <Outlet context={{ rolls: state.rolls, result: state.result }} />
        </div>
    );
};

export default JeuPage;
