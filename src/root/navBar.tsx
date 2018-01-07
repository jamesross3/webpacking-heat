/**
 * External
 */
import { Classes, Icon, IconClasses } from "@blueprintjs/core";
import * as React from "react";

export class NavBar extends React.PureComponent<{}, {}> {

    public render() {
        return (
            <div className={Classes.NAVBAR}>
                <Icon iconName={IconClasses.USER} iconSize={20}/>
                Hello, James
            </div>
        );
    }
}
