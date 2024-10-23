import PropTypes from 'prop-types'; 
import Times from './Times';
import Header from '../Components/Header/Header';
import Scoreboard from '../Components/Scoreboard.jsx/Scoreboard';
export default function Home({ teams }) {
    return (
        <>
            <Header />
            <Scoreboard teams={teams}/>
            <div className='container mt-5'>
                <Times teams={teams} />
            </div>
        </>
    );
}

// Definição das propTypes para validar as propriedades recebidas
Home.propTypes = {
    teams: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            nome: PropTypes.string.isRequired,
            membros: PropTypes.arrayOf(
                PropTypes.shape({
                    _id: PropTypes.string.isRequired,
                    nome: PropTypes.string.isRequired,
                    turma: PropTypes.string.isRequired,
                })
            ).isRequired,
        })
    ).isRequired,
};

