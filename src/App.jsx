import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Times from './pages/Times';
import { useEffect, useState } from 'react';

function App() {
    // Estado para armazenar os times
    const [teams, setTeams] = useState([]); 

    // Fetch dos dados de times
    useEffect(() => {
        // Fetch para equipes
        fetch("http://localhost:8080/api/equipes")
            .then((response) => response.json())
            .then((data) => {
                setTeams(data);  // Armazena os times no estado
            })
            .catch((error) => console.error("Error fetching teams:", error));
    }, []);

    // Configuração das rotas
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<Home teams={teams} />} />         
                <Route path="/Times" element={<Times teams={teams} />} />               
            </>
        )
    );

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
