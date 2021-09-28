import api from '../../services/api';
import { useQuery } from 'react-query';

export const CACHE_KEY = 'characters';

async function fetchCharacters() {
  const { data } = await api.get('/character');
  return data;
}

export const useCharacters = () => {
  return useQuery(CACHE_KEY, fetchCharacters, { refetchOnWindowFocus: false });
};
