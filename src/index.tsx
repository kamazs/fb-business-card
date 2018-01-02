import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider, Store } from "react-redux";
import { createStore } from "redux";
import { AppState } from "./types";
import authorize from "./ducks/authorize";
import { AppConnected as App } from "./components/app/App";
import "./index.css";

const store: Store<AppState> = createStore<AppState>(authorize, { user: null });

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root") as HTMLElement
);
