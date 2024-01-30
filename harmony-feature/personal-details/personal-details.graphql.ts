import { GqlSchema } from "@bitdev/symphony.backends.backend-server";
import { gql } from "graphql-tag";
import type { PersonalDetailsNode } from "./personal-details.node.runtime.js";

export function personalDetailsGqlSchema(personalDetails: PersonalDetailsNode): GqlSchema {
    return {
        typeDefs: gql `
      type Query {
        getPersonalDetails: String
      }
    `,
        resolvers: {
            Query: {
                getPersonalDetails: async () => {
                    const score = await personalDetails.getPersonalDetails();
                    return score;
                },
            },
        },
    };
}

