/**
 * External
 */
import { IconClasses, NonIdealState } from "@blueprintjs/core";
import * as React from "react";

export class RootPane extends React.PureComponent<{}, {}> {

    public render() {
        return (
            <div className="root-pane">
                <NonIdealState
                    description="Implement something here!"
                    title="Clean Slate"
                    visual={IconClasses.CLOUD}
                />
            </div>
        );
    }
}
