import React from 'react';
import { getRepos } from '../services/GitHub.js';

const Repos = (props) => {
  return (
    <div>
      <p>
        <label>
          <strong>Repositórios que o usuário contribuiu: </strong>
          <button
            onClick={getRepos(props.usuario)}
            value="Ir para repos do usuário"
          >
            Repos
          </button>
        </label>
      </p>
    </div>
  );
};

export default Repos;
