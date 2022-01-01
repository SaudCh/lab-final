import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';
import AddApplicant from './components/AddApplicant';
import ViewApplicant from './components/ViewApplicant';

function App() {
  return (
    <div>
      <h1 className="text-center">Hostel Application System</h1>
      <Navbar />
      <Routes>
        <Route path="/hostelApplicants" exact>
          <AddApplicant />
        </Route>
        <Route
          path="/viewApplicants"
          exact
        >
          <ViewApplicant />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
