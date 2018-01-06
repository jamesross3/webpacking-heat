/**
 * External
 */
import { Dispatch } from "redux";

/**
 * Local
 */
import { setBar } from "../actions/fooActions";
import { IFooState } from "../state/fooState";
import { IAppState } from "../state/state";

export class FooDispatcher {

    constructor(private dispatch: Dispatch<IAppState>) {}

    public setBar(bar: string) {
        this.dispatch(setBar({bar}));
    }
}
