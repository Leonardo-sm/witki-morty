import { Character } from '../../../models/Character';
import CharacterCard from '../../UI/Cards/CharacterCard';

type CharactersListProps = {
  characters: Character[];
};

function CharactersList({ characters }: CharactersListProps) {
  return (
    <>
      {characters?.map((item) => (
        <CharacterCard
          key={item.id}
          name={item.name}
          status={item.status}
          image={item.image}
        />
      ))}
    </>
  );
}

export default CharactersList;
