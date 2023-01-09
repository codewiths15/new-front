import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddEdit from './pages/AddEdit';
import Home from './pages/Home';
import Navbar from './pages/Navbar';

function App() {
  return (



    <BrowserRouter>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
          <a className="navbar-brand" href="/">MyTaxi</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">List</a>
              </li>


            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </div>
      <div>
        <marquee bgcolor="yellow">*Please enter the details of particular cab!*------*Cab Ids are a@1, a@2, a@3, a@4, a@5, a@6, a@7, a@8, a@9, a@10*     </marquee>
      </div>

      <div className="App">
        <ToastContainer position="top-center" />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/addContact" element={<AddEdit />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
