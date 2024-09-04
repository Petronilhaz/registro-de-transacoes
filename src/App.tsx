import TransactionForm from './Components/TransactionForm'
import TransactionsList from './Components/TransactionsList';
import { TransactionsProvider } from './Context/transationsContext';
//import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <TransactionsProvider>
      <Router>
        <Routes>
          <Route path="/" element={<TransactionForm />} />
          <Route path="/list" element={<TransactionsList />} />
        </Routes>
      </Router>
    </TransactionsProvider>
    </>
  );
}

export default App;
