import React from 'react';
import { getStarred } from '../services/GitHub.js';

const Starred = (props) => {
  const usuario = props.usuario.substr(1, props.usuario.length - 1);

  return (
    <div>
      <p>
        <label>
          <strong>
            Repositórios que foram marcados com estrela (starred):{' '}
          </strong>
          {usuario}
          <button
            onClick={getStarred(usuario)}
            value="Ir para starred do usuário"
          >
            Starred
          </button>
        </label>
      </p>
    </div>
  );
};

export default Starred;
