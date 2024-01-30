import { SymphonyPlatformAspect, SymphonyPlatformNode } from "@bitdev/symphony.symphony-platform";
import type { PersonalDetailsConfig } from "./personal-details-config.js";
import { personalDetailsGqlSchema } from "./personal-details.graphql.js";

export class PersonalDetailsNode {
    constructor(private config: PersonalDetailsConfig) { }

    /**
     * 
     */
    async getPersonalDetails(): Promise<string> {
        return 'AMAZING DETAILS FROM BACKEND..';
    }

    static dependencies = [SymphonyPlatformAspect];

    static defaultConfig: PersonalDetailsConfig = {};

    static async provider([symphonyPlatform]: [
        SymphonyPlatformNode
    ], config: PersonalDetailsConfig) {
        const personalDetails = new PersonalDetailsNode(config);
        const gqlSchema = personalDetailsGqlSchema(personalDetails);

        symphonyPlatform.registerBackendServer([
            {
                name: 'personal-details-bff',
                gql: gqlSchema,
            },
        ]);

        return personalDetails;
    }
}

export default PersonalDetailsNode;

