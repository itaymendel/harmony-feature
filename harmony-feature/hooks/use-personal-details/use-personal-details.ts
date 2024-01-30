import { useQuery, gql } from "@apollo/client";

export const GET_PERSONAL_DETAILS = gql `
  query GET_PERSONAL_DETAILS {
    getPersonalDetails
  }
`;

export function usePersonalDetails(skip = false): string {
    const results = useQuery(GET_PERSONAL_DETAILS, {
        skip,
    });

    if (results.loading)
        return undefined;
    if (!results.data?.getPersonalDetails)
        return null;

    return results.data.getPersonalDetails;
}

