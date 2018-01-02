import * as React from "react";
import { connect } from "react-redux";
import { UserInfo, AppState } from "../../types";
import { logout } from "../../ducks/authorize";
import { LoginConnected as Login } from "../login/Login";
import { Card } from "../Card/Card";
import { BusinessCard } from "../business-card/BusinessCard";
import "./App.css";

interface AppOwnProps {
    user: UserInfo | null;
}

interface AppDispatchProps {
    logout: typeof logout;
}

type AppProps = AppOwnProps & AppDispatchProps;

export class App extends React.Component<AppProps> {
    public render(): JSX.Element {
        const user = this.props.user;
        if (!user) {
            return (
                <Card pulsate={true}>
                    <Login />
                </Card>
            );
        }
        return (
            <BusinessCard
                name={user.name}
                email={user.email}
                pictureUrl={user.picture.url}
                onClickClose={this.onLogout}
            />
        );
    }

    private onLogout = () => this.props.logout();
}

const mapStateToProps = (state: AppState) => ({ user: state.user });
const mapDispatchToProps = { logout };

export const AppConnected = connect(mapStateToProps, mapDispatchToProps)(App);
