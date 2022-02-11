import gql from 'graphql-tag';
import { useQuery } from '@vue/apollo-composable';
import { MissionsSpaceX } from '@/domain/types/typesSpaceX';

export const getSpaceXMissions = () => {
  const { result, loading, error } = useQuery<MissionsSpaceX>(
    gql`
      query allMissions {
        missions {
          description
          name
          twitter
          website
          wikipedia
          id
        }
      }
    `,
    null,
    {
      fetchPolicy: 'cache-and-network',
      clientId: 'startWarsClient',
    }
  );
  return { result, loading, error };
};
