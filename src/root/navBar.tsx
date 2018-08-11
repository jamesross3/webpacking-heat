/**
 * External
 */
import { Classes, Icon } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import * as React from "react";

export class NavBar extends React.PureComponent<{}, {}> {

    public render() {
        return (
            <div className={Classes.NAVBAR}>
                <Icon icon={IconNames.USER} iconSize={20}/>
                Hello, James
            </div>
        );
    }
}
