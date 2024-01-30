import type { ComponentType } from "react";
import type { SlotRegistry } from "@bitdev/harmony.harmony";

export interface DashboardWidget {
    /**
     * name of the widget
     */
    name: string;

    /**
     * component to render as a widget.
     */
    component: ComponentType;
}

export type DashboardWidgetSlot = SlotRegistry<DashboardWidget[]>;

