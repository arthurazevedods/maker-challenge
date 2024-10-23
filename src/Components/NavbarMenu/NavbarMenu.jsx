import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavbarMenu.css';

function NavbarMenu() {
  return (
    <header className='fixed-top'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> {/* Cor do navbar */}
        <div className="container-fluid">
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 d-flex justify-center">
              <Link to="/" className='nav-item'>
                <Button className='p-1 pb-2 btn bg-transparent border-0 btn-circle rounded-circle'>
                  <svg
                    className="icon"
                    stroke="currentColor"
                    fill="currentColor"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"
                    ></path>
                  </svg>
                </Button>
              </Link>
              <Link to="/Times" className='nav-item'>
                <Button className='btn bg-transparent border-0 text-white text-uppercase'>
                  Times
                </Button>
              </Link>
              <Link to="/Desafios" className='nav-item'>
                <Button className='btn bg-transparent border-0 text-white text-uppercase'>
                  Desafios
                </Button>
              </Link>
              <Link to="/Scoreboard" className='nav-item'>
                <Button className='btn bg-transparent border-0 text-white text-uppercase'>
                  Classificação
                </Button>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavbarMenu;
