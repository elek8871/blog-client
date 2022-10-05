import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import NavBar from './components/partials/NavBar'
import Home from './components/routes/Home'
import Bounties from './components/routes/Bounties'
import Bounty from './components/routes/Bounty'
import EditBounty from './components/routes/EditBounty'
import NewBounty from './components/routes/NewBounty'


function App() {
  return (
    <div className="App">
      <Router>

       <NavBar/>

        <Routes>

            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/bounties'
              element={<Bounties />}
            />
            <Route
              path='/bounties/new'
              element={<NewBounty />}
            />
            <Route
              path='/bounties/:id'
              element={<Bounty />}
            />
            <Route
              path='/bounties/:id/edit'
              element={<EditBounty />}
            />
          </Routes> 
      </Router>
    </div>
  );
}

export default App;
