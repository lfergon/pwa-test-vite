import gql from 'graphql-tag';
import { useQuery } from '@vue/apollo-composable';
import { AllTeas } from '@/domain/types/types';

export const getAllTea = () => {
    const { result, loading, error } = useQuery<AllTeas>(gql`
      query allTea {
        teas {
          name
          id
          description
          price
        }
      }
    `);
    return {result, loading, error};
};
