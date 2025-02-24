
import React from "react";

const DescriptionPage = () => {
    return (
        <div className="page" id="Description">
            <h2>Description du jeu</h2>
            <p>
                Ce jeu consiste à lancer trois dés un nombre de fois défini par
                l'utilisateur et à compter le nombre de fois où vous obtenez un brelan
                de 6 (trois dés affichant 6). Le compteur se réinitialise à chaque
                nouvelle expérience.
            </p>
        </div>
    );
};

export default DescriptionPage;
