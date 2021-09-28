import { Character } from '../../models/Character';
import api from '../../services/api';
import { useQuery } from 'react-query';

type QueryProps = {
  character: Character;
  location: any;
  episode: any;
};

export const CACHE_KEY = 'categories';

export enum Categories {
  character,
  location,
  episode,
}

async function fetchCategories(id: number) {
  const { data } = await api.get(`/${Categories[id]}/1,2,3,4,5,6,7,8,9`);
  return data;
}

export const useSelectedCategories = (id: number) => {
  return useQuery([CACHE_KEY, id], () => fetchCategories(id), {
    refetchOnWindowFocus: false,
  });
};
