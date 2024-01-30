import type { ComponentType } from "react";
import React from "react";
import { Logo } from "@bitdesign/sparks.content.logo";

import { Header as BaseHeader } from "@bitdesign/sparks.layout.header";

export type DashboardProps = {
    widgets?: ComponentType[];
};

export function Dashboard({ widgets }: DashboardProps) {
    return (<div>
      <BaseHeader logo={<Logo slogan="Personal Dashboard"/>}/>
      <div>
       personal dashboard with data from various places
        management:
      </div>
      {widgets.map((widget, key) => {
            const WidgetComponent = widget;
            return (<div key={`item-${key}`} style={{
                    width: '200px',
                    height: '200px',
                    border: '1px solid black',
                    marginBottom: '10px',
                }}>
            <WidgetComponent key={key}/>
          </div>);
        })}
    </div>);
}

