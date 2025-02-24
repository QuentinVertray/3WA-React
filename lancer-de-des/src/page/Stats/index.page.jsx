import React from "react";
import { useOutletContext, useParams } from "react-router";

const StatsPage = () => {
    const { rolls, result } = useOutletContext();

    return (
        <div className="page" id="Stats">
            <h2>Statistiques</h2>
            <p>
                Nombre de brelans de 6 obtenus : {result}
            </p>
            <ul>
                {rolls.map((roll, index) => (
                    <li key={index}>
                        Lancer {index + 1} : {roll.dice1}, {roll.dice2}, {roll.dice3}{" "}
                        {roll.isBrelan ? "(Brelan)" : ""}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StatsPage;
