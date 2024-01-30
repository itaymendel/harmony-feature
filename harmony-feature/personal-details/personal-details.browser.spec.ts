import { loadAspect } from "@bitdev/harmony.testing.load-aspect";
import type { PersonalDetailsBrowser } from "./personal-details.browser.runtime.js";
import { PersonalDetailsAspect } from "./personal-details.aspect.js";

it('should retrieve the aspect', async () => {
    const personalDetails = await loadAspect<PersonalDetailsBrowser>(PersonalDetailsAspect, {
        runtime: 'browser',
    });

    expect(personalDetails).toBeTruthy();
});

