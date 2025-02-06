import useCalculateContext from "../context/CalculateContext.jsx";

const Display = () => {
    const {state : {expression, result}} = useCalculateContext()

    return(
        <div>
            <span>{result || expression || "0" }</span>
            <hr/>
        </div>
    )
}

export default Display