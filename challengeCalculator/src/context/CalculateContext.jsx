import {createContext, useContext} from "react";
import useCalculateReducer from "../reducer/calculateReducer.jsx"

const CalculateContext = createContext()

export const CalculateProvider = ({children}) => {
    const [state, dispatch] = useCalculateReducer();

    return <CalculateContext.Provider value={{state, dispatch}}>
        {children}
    </CalculateContext.Provider>
}

const useCalculateContext = () => useContext(CalculateContext)

export default useCalculateContext