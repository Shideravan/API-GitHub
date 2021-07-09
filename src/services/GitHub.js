import { get } from './Api.js';

// Informações básicas, estão separadas com o intuito de facilitar a leitura do código.
const api = {
  baseURL: 'https://api.github.com',
  client_id: 'b7d62616434825025c4d',
  client_secret: '07021f29741edfd4717cd4edbf2db964bdf5dfc0',
};

export const getUsers = async (busca, numeroResultados) => {
  return get(
    `${api.baseURL}/search/users?q=${busca}&per_page=${numeroResultados}&client_id=${api.client_id}&client_secret=${api.client_secret}`
  );
};

export const getRepos = async (usuario) => {
  return get(usuario);
};

export const getStarred = async (usuario) => {
  return get(
    `${api.baseURL}/${usuario}/&client_id=${api.client_id}&client_secret=${api.client_secret}`
  );
};
