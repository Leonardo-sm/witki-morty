import { Badge } from '@chakra-ui/react';

type CharacterStatusProps = {
  status?: 'Alive' | 'Dead' | 'unknown';
};

function CharacterStatus({ status }: CharacterStatusProps) {
  const statusColor =
    status === 'Alive' ? 'green' : status === 'Dead' ? 'red' : 'gray';

  return (
    <Badge ml="2" colorScheme={statusColor}>
      {status}
    </Badge>
  );
}

export default CharacterStatus;
