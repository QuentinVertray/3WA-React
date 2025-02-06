import useCalculateContext from "../context/CalculateContext.jsx";
import Display from "./Display.jsx";

const Calculator = () => {
    const {state} = useCalculateContext()

    return(
        <>
            {
                state.error && <span style={{color: "red"}}>{state.error}</span>
            }
            <Display/>
            {/*<Inputs/>*/}
        </>
    )
}

export default Calculator