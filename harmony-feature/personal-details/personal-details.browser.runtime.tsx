import { SymphonyPlatformAspect, SymphonyPlatformBrowser } from "@bitdev/symphony.symphony-platform";
import type { PersonalDetailsConfig } from "./personal-details-config.js";
import { DashboardWidget, DashboardWidgetSlot } from "./dashboard-widget.js";

import { HeaderBrowser, HeaderAspect } from "@bitdev/symphony.aspects.header";
import { Dashboard } from "@itaysso/harmony-feature.layout.dashboard";
import { usePersonalDetails } from "@itaysso/harmony-feature.hooks.use-personal-details";
import { Button } from "@bitdesign/sparks.actions.button";

export class PersonalDetailsBrowser {
    constructor(private config: PersonalDetailsConfig, private dashboardWidgetSlot: DashboardWidgetSlot) { }

    /**
     * register a list of dashboard widget.
     */
    registerDashboardWidget(dashboardWidgets: DashboardWidget[]) {
        this.dashboardWidgetSlot.register(dashboardWidgets);
        return this;
    }

    /**
     * list all dashboard widget.
     */
    listDashboardWidgets() {
        return this.dashboardWidgetSlot.flatValues();
    }

    static dependencies = [SymphonyPlatformAspect, HeaderAspect];

    static defaultConfig: PersonalDetailsConfig = {
        dashboardRoute: '/',
    };

    static async provider([symphonyPlatform, header]: [
        SymphonyPlatformBrowser,
        HeaderBrowser | undefined
    ], config: PersonalDetailsConfig, [dashboardWidgetSlot]: [
        DashboardWidgetSlot
    ]) {
        const personalDetails = new PersonalDetailsBrowser(config, dashboardWidgetSlot);

        header?.registerAction([
          {
            name: 'personal-details-dashboard',
            component: () => (<Button href={config.dashboardRoute}>Your Dashboard</Button>),
          },
        ]);
        

        symphonyPlatform.registerRoute([
            {
                path: config.dashboardRoute,
                component: () => {
                    const dashboardWidgets = personalDetails.listDashboardWidgets();
                    const widgetComponents = dashboardWidgets.map((dashboardWidget) => dashboardWidget.component);
                    return <Dashboard widgets={widgetComponents}/>;
                },
            },
        ]);

        personalDetails.registerDashboardWidget([
            {
                name: 'personal-details widget',
                component: () => {
                    const personalDetails = usePersonalDetails();
                    return (<div style={{ backgroundColor: 'red' }}>{`PersonalDetails score is: ${personalDetails}`}</div>);
                },
            },
        ]);

        return personalDetails;
    }
}

export default PersonalDetailsBrowser;

