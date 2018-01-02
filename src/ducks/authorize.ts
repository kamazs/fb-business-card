import { AppState, UserInfo } from "../types";

export enum ActionTypeKeys {
    LOG_IN = "mobilly-fb/auth/LOG_IN",
    LOG_OUT = "mobilly-fb/auth/LOG_OUT",
    OTHER_ACTION = "mobilly-fb/auth/OTHER_ACTION",
}

// Actions

export interface LogInAction {
    type: ActionTypeKeys.LOG_IN;
    user: UserInfo;
}

export interface LogOutAction { type: ActionTypeKeys.LOG_OUT; }

export interface OtherAction { type: ActionTypeKeys.OTHER_ACTION; }

export type ActionTypes = LogInAction | LogOutAction | OtherAction;

// Action creators

export function login(user: UserInfo): LogInAction {
    return { type: ActionTypeKeys.LOG_IN, user };
}

export function logout(): LogOutAction {
    return { type: ActionTypeKeys.LOG_OUT };
}

// Reducer

export default function reducer(state: AppState, action: ActionTypes): AppState {
    switch (action.type) {
        case ActionTypeKeys.LOG_IN:
            return { user: action.user };
        case ActionTypeKeys.LOG_OUT:
            // tslint:disable-next-line:no-string-literal
            window["FB"].logout();
            return { user: null };
        default:
            return state;
    }
}
