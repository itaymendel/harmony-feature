import { HarmonyPlatform } from "@bitdev/harmony.harmony-platform";
import { NodeJSRuntime } from "@bitdev/harmony.runtimes.nodejs-runtime";
import { BrowserRuntime } from "@bitdev/harmony.runtimes.browser-runtime";
import { SymphonyPlatformAspect } from "@bitdev/symphony.symphony-platform";

import { HeaderAspect } from "@bitdev/symphony.aspects.header";

import { HomepageAspect } from "@itaysso/harmony-platform.homepage";

import { FinanceAspect } from "@itaysso/harmony-second-feature.finance";
import { PersonalDetailsAspect } from "@itaysso/harmony-feature.personal-details";


/**
  * compose the app-shell platform.
  */
export const AppShell = HarmonyPlatform.from({
  name: 'app-shell',
  platform: [SymphonyPlatformAspect, {
    name: 'AppShell',
    slogan: 'Platform',
    logo: 'https://static.bit.dev/extensions-icons/wayne.svg',
  }],

  runtimes: [
    new BrowserRuntime(),
    new NodeJSRuntime()
  ],

  aspects: [
    // you can use the symphony header aspect or fork to build your own.
    HeaderAspect,
    FinanceAspect,
    [
      PersonalDetailsAspect, { dashboardRoute: 'personal-dashboard' }
    ],
    HomepageAspect
  ],
});

export default AppShell;
