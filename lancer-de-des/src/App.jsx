import "./App.css";
import { Routes, Route } from "react-router";
import Lien from "./component/Lien.jsx";
import JeuPage from "./page/Jeu/index.page.jsx";
import DescriptionPage from "./page/Description/index.page.jsx";
import StatsPage from "./page/Stats/index.page.jsx";
import useDiceReducer from "./reducer/diceReducer.jsx";

const App = () => {
    const { state, resetResult, setResult } = useDiceReducer();

    return (
        <>
            <h1>Jeu de Dés</h1>
            <nav
                style={{
                    display: "flex",
                    gap: "15px",
                    justifyContent: "center",
                }}
            >
                <Lien label={"Accueil"} to={"/accueil"} />
                <Lien label={"Description"} to={"/description"} />
            </nav>
            <Routes>
                <Route
                    path={"/accueil"}
                    element={
                        <JeuPage
                            state={state}
                            resetResult={resetResult}
                            setResult={setResult}
                        />
                    }
                >
                    <Route path={"stats/:result"} element={<StatsPage />} />
                </Route>
                <Route path={"/description"} element={<DescriptionPage />} />
                <Route path={"*"} element={<div>404 not found</div>} />
            </Routes>
        </>
    );
};

export default App;