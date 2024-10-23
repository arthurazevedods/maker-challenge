import PropTypes from 'prop-types';

function Times({ teams }) {
    return (
        <div>
            <h1>Times</h1>
            {teams && teams.length > 0 ? (
                teams.map((team) => (
                    <div key={team._id}>
                        <h3>{team.nome}</h3>
                        <p>Membros:</p>
                        <ul>
                            {team.membros.map((member) => (
                                <li key={member._id}>
                                    {member.nome} ({member.turma})
                                </li>
                            ))}
                        </ul>
                    </div>
                ))
            ) : (
                <p>Não há times disponíveis.</p>
            )}
        </div>
    );
}

// Definição das propTypes para validar as propriedades recebidas
Times.propTypes = {
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

export default Times;
