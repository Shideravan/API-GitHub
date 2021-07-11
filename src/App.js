import React, { useState } from 'react';
import Item from './components/Item.jsx';
import Starred from './components/Starred.jsx';
import Repos from './components/Repos.jsx';
import './style/reset.css';
import './style/App.css';
import { getUsers } from './services/GitHub.js';

const App = () => {
  const [busca, setBusca] = useState('');
  const [arranjoDeObjetos, setArranjoDeObjetos] = useState([]);

  const fetchData = async () => {
    //A quantidade de resultaddos a serem exibidos na tela pode ser modificado mudando o valor da variável abaixo
    const numeroResultados = 100;
    try {
      getUsers(busca, numeroResultados)
        .then((r) => r.json())
        .then((jsonRecebido) => {
          console.log('Valor recebido em JSON: ' + jsonRecebido);
          setArranjoDeObjetos(jsonRecebido.items);
        });
    } catch (error) {
      alert('Erro ao buscar resultado da API');
    }
  };

  const handleChange = (event) => {
    setBusca(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <div className="container-app">
      <div className="row">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="barra-de-buscas"
            placeholder="Digite a busca aqui"
            value={busca}
            onChange={handleChange}
          />
          <input type="submit" value="Clique aqui para buscar!" />
        </form>

        {/* Este map a seguir faz com que todos os elementos do arranjo de objetos "arranjoDeObjetos" sejam exibidos */}
        {arranjoDeObjetos.map((usuario) => (
          <div className="col-md-12" key={usuario.id}>
            <img src={usuario.avatar_url} alt="Foto do repositório" />
            <Item titulo="Nome do Usuário: " item={usuario.login} />
            <Item titulo="ID: " item={usuario.id} />
            <Item titulo="URL do Github do Usuário: " item={usuario.url} />
            <Starred usuario={usuario.starred_url} />
            <Repos usuario={usuario.repos_url} />
            <Item titulo="Starred: " item={usuario.starred_url} />
            <Item titulo="Repos: " item={usuario.repos_url} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
