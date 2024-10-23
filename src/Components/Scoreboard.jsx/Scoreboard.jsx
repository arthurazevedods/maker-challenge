import PropTypes from 'prop-types';
import './Scoreboard.css';

function Scoreboard({ teams }) {
    // Calcular a pontuação total de cada equipe e ordenar
    const sortedTeams = teams
        .map(team => ({
            ...team,
            totalPoints: team.pontuacoes.reduce((acc, ponto) => acc + ponto, 0) // Usando reduce para somar pontos
        }))
        .sort((a, b) => b.totalPoints - a.totalPoints); // Ordenar em ordem decrescente

    return (
        <div className='container'>
            <h2>Scoreboard</h2>
            {sortedTeams.length > 0 ? (
                sortedTeams.map((team) => (
                    <div key={team._id}>
                        <h3>{team.nome}</h3>
                        <p>Pontuação total: {team.totalPoints}</p>
                        <div>
                            {team.pontuacoes.length > 0 ? (
                                team.pontuacoes.map((ponto, index) => (
                                    <div key={index}>
                                        <p>Pontuação: {ponto}</p>
                                    </div>
                                ))
                            ) : (
                                <p>Nenhuma pontuação disponível.</p>
                            )}
                        </div>
                    </div>
                ))
            ) : (
                <p>Não há Scoreboard disponíveis.</p>
            )}
        </div>
    );
}

// Definição das propTypes para validar as propriedades recebidas
Scoreboard.propTypes = {
    teams: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            nome: PropTypes.string.isRequired,
            pontuacoes: PropTypes.arrayOf(
                PropTypes.number.isRequired
            ).isRequired,
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

export default Scoreboard;
