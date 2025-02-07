import './App.css'
import ExpenseForm from "./components/expenseForm.jsx";
import ExpenseList from "./components/expenseList.jsx";
import TotalExpenses from "./components/totalExpenses.jsx";
import {ExpenseProvider} from "./context/expenseContext.jsx";

const App = () => {
    return(
        <>
            <ExpenseProvider>
                <div className="app">
                    <h1>Gestionnaire de Dépenses</h1>
                    <ExpenseForm />
                    <ExpenseList />
                    <TotalExpenses />
                </div>
            </ExpenseProvider>
        </>
    )
}

export default App
