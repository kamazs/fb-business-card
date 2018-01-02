import * as React from "react";
import FacebookLogin from "react-facebook-login";
import { connect } from "react-redux";
import { login } from "../../ducks/authorize";
import "./Login.css";

interface FBAuthResponse {
    // tslint:disable-next-line:no-any
    [key: string]: any;
}

interface LoginProps {
    login: typeof login;
}

export class Login extends React.Component<LoginProps> {
    public render(): JSX.Element {
        return (
            <div className="login">
                <p> Lai sāktu, pieraksties - </p>
                <FacebookLogin
                    appId="852303158286038"
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={this.onResponse}
                    reAuthenticate={true}
                    icon="fa-facebook"
                />
            </div>
        );
    }

    private onResponse = (response: FBAuthResponse) => {
        this.props.login({
            id: response.id,
            name: response.name,
            email: response.email,
            picture: {
                url: response.picture.data.url,
                width: response.picture.data.width,
                height: response.picture.data.height,
            },
        });
    }
}

const mapDispatchToProps = { login };
export const LoginConnected = connect(null, mapDispatchToProps)(Login);
