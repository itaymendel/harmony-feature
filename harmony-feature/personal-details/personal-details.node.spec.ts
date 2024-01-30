import { loadAspect } from "@bitdev/harmony.testing.load-aspect";
import type { PersonalDetailsNode } from "./personal-details.node.runtime.js";
import { PersonalDetailsAspect } from "./personal-details.aspect.js";

it('should retrieve the aspect', async () => {
    const personalDetails = await loadAspect<PersonalDetailsNode>(PersonalDetailsAspect, {
        runtime: 'node',
    });

    expect(personalDetails).toBeTruthy();
});

