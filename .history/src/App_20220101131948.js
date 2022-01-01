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
        <Route path="/hostelApplicants" >
          <AddApplicant />
        </Route>
        <Route
          path="/viewApplicants"
        >
          <ViewApplicant />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
