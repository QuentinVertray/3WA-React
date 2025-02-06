import useCalculateContext from "../context/CalculateContext.jsx";
import Button from "./Button.jsx";
import "../styles/Buttons.css"

const numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];
const operators = ["+", "-", "*"];

const Buttons = () => {
    const {dispatch} = useCalculateContext();

    const handleNumberClick = (num) => {
        dispatch({
            type: "set_value",
            payload: {
                name : "expression",
                value: num
            }
        });
    };

    const handleOperatorClick = (op) => {
        dispatch({
            type: "set_operator",
            payload: {
                value: op
            }
        })
    }

    const handleEqual = () => {
        dispatch({
            type: "calculate"
        })
    }

    const handleReset = () => {
        dispatch({
            type: "reset"
        })
    }

    return(
        <>
            <div className="buttons-grid">
                {/*Bouton chiffres*/}
                {numbers.map(num => (
                    <Button key={num} label={num} handleClick={() => handleNumberClick(num)}/>
                ))}

                {/*Bouton opérateur*/}
                {operators.map((op, index) => (
                    <Button key={op} label={op} handleClick={() => handleOperatorClick(op)}
                            className={`operator-btn op-${index}`} />
                ))}

                {/*Bouton égal et reset*/}
                <Button label="CE" handleClick={handleReset} className="reset-btn"/>
                <Button label="=" handleClick={handleEqual} className="equal-btn"/>
            </div>
        </>
    )
}

export default Buttons



