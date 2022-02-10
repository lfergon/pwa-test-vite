import gql from 'graphql-tag';
import { useQuery } from '@vue/apollo-composable';
import { AllTeas } from '@/domain/types/types';

export const getAllTeas = () => {
    const { result, loading, error } = useQuery<AllTeas>(gql`
      query allTea {
        teas {
          name
          id
        }
      }
    `);
    return {result, loading, error};
};
